import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/home/home'
import About from '../pages/about/about'

const Root = () => (
    <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/home'><Home/></Route>
        <Route path='/about'><About/></Route>
    </Switch>
);

export default Root;