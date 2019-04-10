import { 
    IS_LOADING,

    LOGIN,
    LOGOUT,

    PAGINATION,
    INF_SCROLL
} from "./consts";

const initialState = {
    isLoading: false,
    user: {
        id: -1,
        name: '',
        settings: {
            typeInfinityContent: INF_SCROLL
        }
    }
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {            
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state;
    }
};