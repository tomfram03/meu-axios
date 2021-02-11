import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Cadastro from './pages/cadastrar/Cadastro';
import Sobre from './pages/sobre/Sobre';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/sobre" component={Sobre} />
                
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
