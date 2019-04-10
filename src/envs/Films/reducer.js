import { 
    FETCH_BOOL_SEARCH,
    IS_LOADING
} from "./consts";

const initialState = {
    isLoading: true,
    currentType: 'boolsearch',
    boolsearch: {
        query: '',
        nextIsset: true,
        results: {} // постранично
    },
    quoteSearch: {
        query: '',
        nextIsset: true,
        results: {}
    },
    tfidfSearch: {
        query: '',
        nextIsset: true,
        results: {}
    },
    areaSearch: {
        query: '',
        nextIsset: true,
        results: {}
    },
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case FETCH_BOOL_SEARCH: {
            const { query, page, results, nextIsset } = action;

            return {
                ...state,
                [state.currentType]: {
                    ...state.boolsearch,
                    query,
                    nextIsset,
                    results: query === state.boolsearch.query ? 
                        { ...state.boolsearch.results, [page]: results } :
                        { [page]: results }
                }
            }
        }
            
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state;
    }
};