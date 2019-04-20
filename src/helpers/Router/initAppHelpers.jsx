import React from 'react';

import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import { Route } from 'react-router-dom';

export let appRoutes = {};

const createRoutesWorker = ( routes, curRoute ) => {
    return Object.keys( routes ).map( key => {
        const node = routes[key];

        const nodeRoute = curRoute + node.route;

        if( node.childs )
            return createRoutesWorker( node.childs, nodeRoute );

        if( node.component ) {
            appRoutes[node.name] = nodeRoute;

            return ( 
                <Route
                    key={nodeRoute}
                    exact
                    path={nodeRoute} 
                    component={node.component}
                />
            );
        }

        return null;
    } )
};

export const createRoutes = ( routes ) => {
    appRoutes = {};
    return createRoutesWorker( routes, '' );
};

export const createRouterHistory = ( store ) => {
    return syncHistoryWithStore( createBrowserHistory(), store );
};