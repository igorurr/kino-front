import { createEnv } from "../../helpers/Environment";
import { createEnv } from "../../helpers/Router";

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

export const redirectIsLogined = ( name, params, CompIsTrue ) => withKino( ( { kino, ...props } ) => redirectSwitch()
    
);