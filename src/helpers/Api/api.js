import requestMethod from './request';

const handleError = ( error, url, method ) => {
    const errObj = {
        error: true,
        status: 0,
        msg: typeof error == 'string' ? error : error
    };

    console.log('checkError', error);
    /*
    else
        {
            message: "Failed to fetch"
            stack: "TypeError: Failed to fetch"
        }
    */

    printResponse( url, method, 0, true, errObj )

    throw errObj;
}

const checkResponseStatus = ( response, url, method ) => {
    console.log('checkResponseStatus', response);

    if (response.status >= 200 && response.status < 300) {
        printResponse( url, method, 0, false, response );
        return response;
    }

    throw {
        status: response.status,
        statusText: response.statusText,
        response
    };
}

const parseResponse = (response) => {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    if (response.headers.get("Content-Type").includes("json")) {
        return response.json();
    }
    return response.blob();
}

const printResponse = ( url, method, status, responseIsError, response ) => {
    let color = responseIsError ? "red" : "green";

    console.groupCollapsed(
        "%c %s %s %s",
        `color:${color};font-family:monospace;font-weight:bold`,
        method,
        status,
        url
    );
    console.dir(response);
    console.groupEnd();
}

export const compileMethod = ( { url, method, defHeaders, defOptions, preload } ) =>
    ( options, headers ) => {
        if(preload)
            [options, headers] = preload(options, headers);

        if(headers)
            Object.assign( headers, defHeaders );
        else
            headers = defHeaders || {};

        if(options)
            Object.assign( options, defOptions );
        else
            options = defOptions || {};
        
        return requestMethod( url, method, headers, options )
            .then( resp => checkResponseStatus( resp, url, method ) )
            .then( parseResponse )
            .catch( err => handleError( err, url, method ) );
    };