import React from 'react';
import Menu from './components/menu';
import View from './router/router'
import {BrowserRouter as Router} from "react-router-dom";

export default function Layout() {
    return (
        <Router>
            <Menu></Menu>
            <View></View>
        </Router>
    )
}