import { compileSchemas, compileEndpoints } from './helpers';
import { compileMethod } from './api';
import { mapObject } from '../Js';

export const createMethods = ( endpoints, schemas, methods ) => {
    methods = compileSchemas( methods, schemas );
    methods = compileEndpoints( methods, endpoints );
    return mapObject( methods, compileMethod );
};