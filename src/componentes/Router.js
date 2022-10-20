/* 

#O react Router é um pacote para mudança de URLS de aplicação
#Podemos assim acessar outras views, , sem o page reload
#Trocado apenas uma aprte do layaoutde aplicação, ou seja, o que muda de view para view
#Precisamos instalar este pacote no projeto
#E também realizar algumas mudaças em como o PP é estruturado

*/
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/home'
import Contato from './pages/Contato'

function Router (){
    return(
       <Router>
        <ul>
            <li>
                <Link to="/">
                home
                </Link>
            </li>
            <li>
                <Link to="/empresa">
                empresa
                </Link>
            </li>
            <li>
                <Link to="/contato">
                contato
                </Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" elemet={ <Home/>}>
               
            </Route>

            <Route path="/Empresa" elemet={ <Empresa/>}>
                
            </Route>

            <Route path="/Contato" elemet={ <Contato/>}>
                
            </Route>
       </Routes>
       </Router>
       
    )
}

export default Router