import { mapObject } from '../Js';

export const compileSchemas = ( methods, schemas ) => {
    return mapObject( methods, val => {
        if( !val.schemas )
            return val;

        val.schemas.forEach( el => {
            if( !schemas[el] )
                return;

            Object.assign( val, schemas[el] );
        } );

        return val;
    } );
}

export const compileEndpoints = ( methods, endpoints ) =>
    mapObject( methods, val => ({...val, url: endpoints[val.endpoint] + val.url}) );