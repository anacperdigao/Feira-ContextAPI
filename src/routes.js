import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsuarioProvider } from '../src/common/context/Usuario'
import { CarrinhoProvider } from '../src/common/context/Carrinho'

function Router () {

    return (
        <UsuarioProvider> 
            <BrowserRouter>
                <Routes>

                    <Route exact path='/' element={ <Login /> }/>
                    <Route path='/feira' element={ 
                        <CarrinhoProvider>
                            <Feira /> 
                        </CarrinhoProvider>
                    }/>
                    <Route path='/carrinho' element={<Carrinho />} />

                </Routes>
            </BrowserRouter>
        </UsuarioProvider>

    )
}

export default Router;