import { 
    GET_USER,
    LOGOUT
} from "./consts";

export const getUser = ( user, localUser ) => ({
    type: GET_USER,
    user,
    localUser
});

export const logout = () => ({
    type: LOGOUT
});