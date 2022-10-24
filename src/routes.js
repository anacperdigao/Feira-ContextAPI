import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsuarioProvider } from '../src/common/context/Usuario'


function Router () {

    return (

        <BrowserRouter>
            <Routes>
            
            <UsuarioProvider>
                <Route exact path='/' element={<Login />} />
            </UsuarioProvider>

            <Route path='/feira' element={<Feira />} />
            <Route path='/carrinho' element={<Carrinho />} />

            </Routes>
      </BrowserRouter>

    )
}

export default Router;