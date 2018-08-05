import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={PageOne}></Route>
            <Route path='/map' exact component={PageTwo}></Route>
        </Switch>
    </BrowserRouter>
);
