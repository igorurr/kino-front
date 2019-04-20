import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { appRoutes } from './initAppHelpers';

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