import { 
    GET_USER,
    LOGOUT,

    PAGINATION,
    INF_SCROLL
} from "./consts";

const initialState = {
    user: {
        id: -1,
        email: '',
        username: 'Гость',
    },
    localUser: {
        settings: {
            typePagingContent: INF_SCROLL
        }
    }
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {            
        case GET_USER:
            return {
                ...state,
                user: action.user,
                localUser: action.localUser,
            }  

        case LOGOUT:
            return {
                ...state,
                user: initialState.user
            }

        default:
            return state;
    }
};