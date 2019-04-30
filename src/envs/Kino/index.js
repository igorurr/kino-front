import { createEnv } from "../../helpers/Environment";
import { redirectIf } from "../../helpers/Router";

import Actions from "./actions";
import Data from "./data";
import Api from "./api";

export const withKino = createEnv( Data, Actions, Api, 'kino' );

//const Asdfsdf = ( { kino } ) => 

export const isLogined = ( CompIsTrue, CompIsFalse ) => withKino( ( { kino, ...props } ) =>
    kino.data.userLogined() ? ( <CompIsTrue {...props} /> ) : ( <CompIsFalse {...props} /> )
);

export const isNoLogined = ( CompIsTrue ) => withKino( ( { kino, ...props } ) =>
    !kino.data.userLogined() ? ( null ) : ( <CompIsTrue {...props} /> )
);

export const redirectIsLogined = ( name, params, Component ) => withKino( ( { kino, ...props } ) => {
    const WrapedComponent = redirectIf( name, params, kino.data.userLogined(), Component );

    return ( <WrapedComponent {...props} /> );
} );

export const redirectIsNologined = ( name, params, Component ) => withKino( ( { kino, ...props } ) => {
    const WrapedComponent = redirectIf( name, params, !kino.data.userLogined(), Component );

    return ( <WrapedComponent {...props} /> );
} );