import React from 'react';
import { Route, Link as RouterLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

let appRoutes = {};

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

export const redirect = ( routeName ) => {
    /*
        <Link
            to={{
                pathname: "/courses",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
            }}
        />
    */
    //redirect
};

export const Link = ({ route, children }) => (
    <RouterLink
        to={{
            pathname: appRoutes[route]
        }}
    >
        {children}
    </RouterLink>
);