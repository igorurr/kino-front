import { 
    FETCH_BOOL_SEARCH,
    IS_LOADING
} from "./consts";

export const fetchBoolSearch = ( query, page, results, nextIsset ) => ({
    type: FETCH_BOOL_SEARCH,
    query,
    page,
    results,
    nextIsset
});

export const isLoading = ( isLoading ) => ({
    type: IS_LOADING,
    isLoading
});