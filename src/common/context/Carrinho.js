import { createContext, useState } from 'react';


export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho'; // Isso aqui só serve pra visualizar o nome do contexto no devtools


export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);

    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}