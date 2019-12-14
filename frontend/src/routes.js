import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Initial from './pages/Initial';
import Computers from './pages/Computers';
import Menus from './pages/Menus';
import Keys from './pages/Keys'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Route path="/computers" component={Computers} />
                <Route path="/menus" component={Menus} />
                <Route path="/keys" component={Keys} />
            </Switch>
        </BrowserRouter>
    );
}