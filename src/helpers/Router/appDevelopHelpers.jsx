import React from 'react';
import { Link as LinkComp, Redirect as RedirectComp } from 'react-router-dom';

import { appRoutes, history } from './initAppHelpers';

/*const listHashesToStr = ( list ) =>
    `#${list.join('#')}`;*/

const dictSearchToStr = ( dict ) => // можно было юзать urlsearchparams, но я хотел повыпендриваться
    `?${Object.keys(dict).map(key=>`${key}=${dict[key]}`).join('&')}`;

const getPath = ( route, data, hash, search ) => {
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

export const redirect = ( route, hash, search ) => {
    history.push( getPath( route, null, hash, search ) );
};

export const Redirect = ( { route, hash, search } ) => (
    <RedirectComp to={getPath( route, null, hash, search )} />
);

export const Link = ({ children, route, hash, search }) => (
    <LinkComp to={getPath( route, null, hash, search )}>
        {children}
    </LinkComp>
);