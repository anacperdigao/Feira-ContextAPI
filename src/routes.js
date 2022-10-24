import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsuarioProvider } from '../src/common/context/Usuario'


function Router () {

    return (
        <UsuarioProvider> 
            <BrowserRouter>
                <Routes>

                    <Route exact path='/' element={ <Login /> }/>
                    <Route path='/feira' element={ <Feira /> } />
                    <Route path='/carrinho' element={<Carrinho />} />

                </Routes>
            </BrowserRouter>
        </UsuarioProvider>

    )
}

export default Router;