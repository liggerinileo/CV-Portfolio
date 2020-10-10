import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/views/Home';
import Courses from '../containers/views/Courses';
import Portfolio from '../containers/views/Portfolio';
import Education from '../containers/views/Education';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/courses' component={Courses} />
            <Route component={Home} />
        </Switch>
    </BrowserRouter>
)

export default App;
