import { GET, HEAD, POST, PUT, PATH, DELETE } from './const';

const createUrlOptions = ( url, options ) => {
    const queryString = '?' + Object.keys(options).map( key => key + '=' + options[key] ).join('&');

    return url + queryString;
}


const get = ( url, headers, options ) => { 
    console.log({
        method: GET,
        mode: 'cors',
        headers: Object.assign( {}, headers, {
            'Access-Control-Allow-Origin':'*'
        } ),
        redirect: 'follow'
    })
    return fetch(
    createUrlOptions( url, options ),
    {
        method: GET,
        mode: 'cors',
        headers: Object.assign( {}, headers, {
            'Access-Control-Allow-Origin':'*'
        } ),
        redirect: 'follow'
    }
) };

const head = ( url, headers, options ) => fetch(
    createUrlOptions( url, options ),
    {
        method: HEAD,
        headers,
        redirect: 'follow'
    }
);

const post = ( url, headers, options ) => fetch(
    url, 
    {
        method: POST,
        headers,
        body: options,
        redirect: 'follow'
    }
);

const put = ( url, headers, options ) => fetch(
    url, 
    {
        method: PUT,
        headers,
        body: options,
        redirect: 'follow'
    }
);

const path = ( url, headers, options ) => fetch(
    url, 
    {
        method: PATH,
        headers,
        body: options,
        redirect: 'follow'
    }
);

const deleteRequest = ( url, headers, options ) => fetch(
    url, 
    {
        method: DELETE,
        headers,
        body: options,
        redirect: 'follow'
    }
);


export default ( url, method, headers, options ) => {
    switch( method ) {
        case GET:
            return get( url, headers, options );
        case HEAD:
            return head( url, headers, options );
        case POST:
            return post( url, headers, options );
        case PUT:
            return put( url, headers, options );
        case PATH:
            return path( url, headers, options );
        case DELETE:
            return deleteRequest( url, headers, options );
        default:
            return Promise.reject( { response: {
                status: 0,
                statusText: "Error request method",
            } } );
    }
}