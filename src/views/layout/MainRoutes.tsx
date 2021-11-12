import React, { useMemo,memo} from 'react';
//import Helmet from 'react-helmet';
import {Route, Switch } from 'react-router-dom';

function renderRoute(route){
    return (
        <Route
        >

        </Route>
    )
}

function renderRouteList(){
    const result=[];
    
    return result;
}

function MainRoutes(){
    return <Switch>

    </Switch>
}

export default memo(MainRoutes)