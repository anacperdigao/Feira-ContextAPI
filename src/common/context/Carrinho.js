import { createContext, useContext, useEffect, useState } from 'react';
import { usePagamentoContext } from './Pagamento';
import { UsuarioContext } from './Usuario';


export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho'; // Isso aqui só serve pra visualizar o nome do contexto no devtools


export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0)

    return(
        <CarrinhoContext.Provider 
        value={{carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotalCarrinho, setValorTotalCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}


// Vou criar um hook customizado para que consigamos extrair essa responsabilidade do componente Produto e, 
// ao mesmo tempo, utilizar esse contexto.
// Depois de criar, vou mudar lá no componente Produto para useCarrinhoContext no lugar de useContext.
export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, 
        valorTotalCarrinho, setValorTotalCarrinho } = useContext(CarrinhoContext);

    const { formaPagamento } = usePagamentoContext()

    const { setSaldo } = useContext(UsuarioContext)


    function adicionaProduto(novoProduto) {
        // Nessa const eu vou ver se já existe aquele produto
        // some retorna boolean, entao pra cada itemDoCarrinho, vou testar se essa id é igual a id do novo produto
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
    
        if (!temOProduto) {
          novoProduto.quantidade = 1;
          return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        } // Aqui eu fiz o if se nao tiver o produto no carrinho
        
        // Agora eu vou colocar direto o que fazer se tiver no carrinho
        // Eu utilizei map pq eu vou andar pelo array do carrinho anterior, 
        // e se eu ja encontrar o mesmo itemDoCarrinho, só vou adicionar a quantidade.
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
          if (itemDoCarrinho.id === novoProduto.id) {
            itemDoCarrinho.quantidade += 1
          }
    
          return itemDoCarrinho
        }))
    }


    function retiraProduto (id) {
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;

        if (ehOUltimo) {
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
        }
        
        // Aqui é se nao for o ultimo item
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
            if (itemDoCarrinho.id === id) {
              itemDoCarrinho.quantidade -= 1
            }
            return itemDoCarrinho
        }))

    } 


    function efetuarCompra (){
        setCarrinho([]) //Zerei o carrinho aqui
        setSaldo(saldoAtual => saldoAtual - valorTotalCarrinho)

    }


    //Aqui vou colocar uma escuta no carrinho para conseguir ter o contador(quantidade de itens)
    //Para isso, vou usar o useEffect, e no colchete eu coloco o que eu quero escutar.
    //Lembrando que o reduce precisa de uma funcao callback e o valor inicial da contagem que vai ser 0
    useEffect(() => {
        const { novoTotal, novaQuantidade} = carrinho.reduce((contador, produto) => ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
        }), {novaQuantidade: 0, novoTotal: 0}
        )
        //Vou criar um estado la no CarrinhoProvider pra contar a quantidade

        setQuantidadeProdutos(novaQuantidade)
        setValorTotalCarrinho(novoTotal * formaPagamento.juros)
    }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho, formaPagamento])



    
    return {
        carrinho, 
        setCarrinho,
        adicionaProduto,
        retiraProduto,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        efetuarCompra
    }
}