import { createContext, useContext, useState } from 'react';

export const PagamentoContext = createContext();
PagamentoContext.displayName = 'Pagamento'; // Isso aqui só serve pra visualizar o nome do contexto no devtools

export const PagamentoProvider = ({ children }) => {
    
    const tiposDePagamentos = [
        { nome: "Boleto", juros: 1, id: 1 },
        { nome: "Cartão de Crédito", juros: 1.3, id: 2 },
        { nome: "Pix", juros: 1, id: 3 },
        { nome: "Crediário", juros: 1.5, id: 4 }
    ]

    const [formaPagamento, setFormaPagamento] = useState(tiposDePagamentos[0])

    return (
        <PagamentoContext.Provider value={{tiposDePagamentos, formaPagamento, setFormaPagamento}}>
            {children}
        </PagamentoContext.Provider>
    )
}


export const usePagamentoContext = () => {
    const { tiposDePagamentos, formaPagamento, setFormaPagamento } = useContext(PagamentoContext)


    function mudarFormaPagamento (id) {
        const pagamentoAtual = tiposDePagamentos.find(pagamento => pagamento.id === id)

        setFormaPagamento(pagamentoAtual)
    }


    return {
        tiposDePagamentos,
        formaPagamento,
        mudarFormaPagamento
    }
}