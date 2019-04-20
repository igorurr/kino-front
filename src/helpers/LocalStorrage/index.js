import { __DEV__ } from "../../App/App";

const get = ( key ) => {
    return localStorage.getItem( key );
}

const set = ( key, value ) => {
    localStorage.setItem( key, value );
}

const remove = ( key ) => {
    return localStorage.removeItem( key );
}

export default {
    get,
    set,
    remove
}