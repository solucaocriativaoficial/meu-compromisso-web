import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from './components/Home';
import List from './components/Lista';
import Error400 from './components/Page400'

export default function RouterLinks()
{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="*" component={Error400}/>
        </Switch>
    )
}