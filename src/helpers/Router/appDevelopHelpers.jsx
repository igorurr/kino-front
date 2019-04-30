import React from 'react';
import { Link as LinkComp, Redirect as RedirectComp } from 'react-router-dom';

import { appRoutes, history } from './initAppHelpers';

/*const listHashesToStr = ( list ) =>
    `#${list.join('#')}`;*/

const dictSearchToStr = ( dict ) => // можно было юзать urlsearchparams, но я хотел повыпендриваться
    `?${Object.keys(dict).map(key=>`${key}=${dict[key]}`).join('&')}`;

const defaultData = {
    data: null,
    hash: null,
    search: null,
    pathname: ''
}

const getPath = ( route, data, hash, search, name, params ) => {
    if( name ) {
        return { 
            pathname: appRoutes[name].pathname,
            ...defaultData,
            ...appRoutes[name].preprocess( params )
        };
    }


    const res = { pathname: appRoutes[route] };

    if( data )
        res.data = data;

    if( hash )
        //res.hash = listHashesToStr(hash);
        res.hash = hash;

    if( search )
        res.search = dictSearchToStr(search);

    return res;
};

const Redirect = ( { route, hash, data, search, name, params } ) => (
    <RedirectComp to={getPath( route, data, hash, search, name, params )} />
);

export const redirect = ( route, hash, data, search, name, params ) => {
    history.push( getPath( route, data, hash, search, name, params ) );
};

/*
    routes = [
        { name, params, pred:()=>bool },
        { name, params, pred:()=>bool }
    ]
*/
export const redirectSwitch = ( routes, Component ) => ( props ) => {
    for( let i = 0; i < routes.length ; i++ )
        if( routes[i].pred() )
            return ( <Redirect name={routes[i].name} params={routes[i].params} /> );

    return (
        <Component {...props} />
    );
}

export const redirectIf = ( name, params, pred, Component ) => ( props ) => {
    if( pred() )
        return ( <Redirect name={name} params={params} /> );

    return (
        <Component {...props} />
    );
}

export const Link = ({ children, hash, data, search, name, params }) => (
    <LinkComp to={getPath( route, data, hash, search, name, params )}>
        {children}
    </LinkComp>
);