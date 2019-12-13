import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Initial from './pages/Initial';
import Computers from './pages/Computers';
import Rooms from './pages/Rooms';
import Keys from './pages/Keys'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Route path="/computers" component={Computers} />
                <Route path="/getCourses" component={Rooms} />
                <Route path="/keys" component={Keys} />
            </Switch>
        </BrowserRouter>
    );
}