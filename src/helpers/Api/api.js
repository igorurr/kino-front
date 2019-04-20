import requestMethod from './request';

import { __DEV__ } from '../../App/App';
import { HEAD } from './const';



export const compileMethod = ( { url, method, defHeaders, defOptions, preload } ) => {
    let requestData = null;

    const parseJson = ( response ) => {
        if ( 
            response.status === 204 || 
            response.status === 205 ||
            method === HEAD
        ) {
            return { data: {}, response };
        }
    
        if ( response.headers.get("Content-Type").includes("json") ) {
            return response.json()
                .then( data => ({ data, response }) );
        }
    
        /* how work blob
            var blob = new Blob(['foo', 'bar']);

            console.log('size=' + blob.size);
            console.log('type=' + blob.type);

            var testEndings = function(string, endings) {
            var blob = new Blob([string], { type: 'plain/text',
                                            endings: endings });
            var reader = new FileReader();
            reader.onload = function(event){
                console.log(endings + ' of ' + JSON.stringify(string) + 
                            ' => ' + JSON.stringify(reader.result));
            };
            reader.readAsText(blob);
            };

            testEndings('foo\nbar',   'native');
            testEndings('foo\r\nbar', 'native');
            testEndings('foo\nbar',   'transparent');
            testEndings('foo\r\nbar', 'transparent')
        */
        return response.blob()
            .then( data => ({ data, response }) )
    }

    const errorHandler = ( error ) => {
        return {
            data: {},
            response: {
                error: true,
                status: 0,
                msg: typeof err !== 'object' ? error : 
                    /*err.message ?*/ error.message
            }
        };
    }

    const finalyResponse = ( { response, data } ) => {
        if ( response.error ) {
            printResponse( { response, data }, true, 0 );
            throw {};
        }

        else if ( response.status < 200 || response.status > 300 ) {
            response = {
                error: true,
                status: response.status,
                response,
                msg: response.statusText
            };

            printResponse( { response, data }, true, response.status );
            throw data;
        }

        else {
            printResponse( { response, data }, false, response.status );
            return data;
        }
    }

    const printResponse = ( response, responseIsError, status ) => {
        if( !__DEV__ )
            return;

        let color = responseIsError ? "red" : "green";
    
        console.groupCollapsed(
            "%c %s %s %s",
            `color:${color};font-family:monospace;font-weight:bold`,
            method,
            status,
            url
        );
        console.log('request ', requestData);
        console.log('response', response);
    
        console.groupEnd();
    }

    return ( options, headers ) => {
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

        requestData = { url, method, headers, options };

        return requestMethod( url, method, headers, options )
            .then( parseJson )
            .catch( errorHandler )
            .then( finalyResponse )
    };
};