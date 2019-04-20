import { GET, HEAD, POST, PUT, PATCH, DELETE } from '../../helpers/Api/';

import { Api } from "../../helpers/Environment";

export default class extends Api {

    constructor( data ) {
        super( data );

        this.initEndpoints( {
            main: 'http://127.0.0.1:8000/api/v1',
            idilia: 'https://kino.rurricgames.ru/api/v1'
        } );

        this.initSchemas( {
            mainEndpoint: {
                endpoint: 'main',
                defHeaders: {
                    //'Accept': 'application/json;odata=verbose',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //'authorization': 'token ae379df3c31a25d0410aeddabf2c0739127db6b9'
                },
                preload: ( options, header ) => {
                    const token = this.data.lsUserAuthToken();
    
                    if( !token )
                        return [options, header];
    
                    const newHeaders = { 
                        ...header,
                        'authorization': `token ${token}`
                    }
    
                    return [ options, newHeaders ]
                }
            }
        } );
        
        this.initMethods( {
            search: {
                url: '/search',
                method: GET,
                schemas: ['mainEndpoint'],
                checkOptions: {
                    query: { required: true, value: '.*' }
                }
            },
            lastQueries: {
                url: '/lastQueries',
                method: GET,
                schemas: ['mainEndpoint'],
                checkOptions: {
                    query: { required: true, value: '.*' }
                }
            },
        } );
        
        this.compileApi();
    }
};