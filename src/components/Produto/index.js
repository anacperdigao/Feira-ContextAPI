import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CarrinhoContext } from '../../common/context/Carrinho'


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const {carrinho, setCarrinho} = useContext(CarrinhoContext) //Ja recebo as propriedades desestruturando

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

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => adicionaProduto({nome, foto, id, valor})}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)