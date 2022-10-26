// Páginas
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';

// React-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Context Providers
import { UsuarioProvider } from '../src/common/context/Usuario'
import { CarrinhoProvider } from '../src/common/context/Carrinho'
import { PagamentoProvider } from 'common/context/Pagamento';


function Router () {

    return (
        <UsuarioProvider> 
            <CarrinhoProvider>
                <PagamentoProvider>
                    <BrowserRouter>
                        <Routes>

                            <Route exact path='/' element={ <Login /> }/>
                            <Route path='/feira' element={ <Feira /> }/>
                            <Route path='/carrinho' element={ <Carrinho /> } />

                        </Routes>
                    </BrowserRouter>
                </PagamentoProvider>
            </CarrinhoProvider>
        </UsuarioProvider>

    )
}

export default Router;