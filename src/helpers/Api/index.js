import { compileSchemas, compileEndpoints } from './helpers';
import { compileMethod } from './api';
import { mapObject } from '../Js';

const __DEV__ = true;

export { GET, HEAD, POST, PUT, PATCH, DELETE } from './const';

export const createMethods = ( endpoints, schemas, methods ) => {
    methods = compileSchemas( methods, schemas );
    methods = compileEndpoints( methods, endpoints );
    return mapObject( methods, compileMethod );
};