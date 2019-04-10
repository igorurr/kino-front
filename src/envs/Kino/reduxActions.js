import { 
    IS_LOADING
} from "./consts";

export const isLoading = ( isLoading ) => ({
    type: IS_LOADING,
    isLoading
});