import { GET, HEAD, POST, PUT, PATCH, DELETE } from './const';

const createUrlOptions = ( url, options ) => {
    const queryString = '?' + Object.keys(options).map( key => key + '=' + options[key] ).join('&');

    return url + queryString;
}

const defaultVals = {
    mode: 'cors',
    redirect: 'follow'
};

const get = ( url, headers, options ) => fetch(
    createUrlOptions( url, options ),
    {
        method: GET,
        headers,
        ...defaultVals
    }
);

const head = ( url, headers, options ) => fetch(
    createUrlOptions( url, options ),
    {
        method: HEAD,
        headers,
        ...defaultVals
    }
);

const post = ( url, headers, options ) => fetch(
    url, 
    {
        method: POST,
        headers,
        body: JSON.stringify(options),
        ...defaultVals
    }
);

const put = ( url, headers, options ) => fetch(
    url, 
    {
        method: PUT,
        headers,
        body: JSON.stringify(options),
        ...defaultVals
    }
);

const patch = ( url, headers, options ) => fetch(
    url, 
    {
        method: PATCH,
        headers,
        body: JSON.stringify(options),
        ...defaultVals
    }
);

const deleteRequest = ( url, headers, options ) => fetch(
    url, 
    {
        method: DELETE,
        headers,
        body: JSON.stringify(options),
        ...defaultVals
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
        case PATCH:
            return patch( url, headers, options );
        case DELETE:
            return deleteRequest( url, headers, options );
        default:
            return Promise.reject( "Error request method" );
    }
}