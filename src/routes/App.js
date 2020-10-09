import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/views/Home';
import Education from '../containers/views/Education';
import NotFound from '../containers/views/NotFound';
import Portfolio from '../containers/views/Portfolio';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;
