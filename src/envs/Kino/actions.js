import { 
    getUser,
    logout
} from "./reduxActions";

import ls from "../../helpers/LocalStorrage";

import { Actions } from "../../helpers/Environment";

/*api.kino.userMe()
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )*/
    
/*api.kino.userRegistration( {
    username: 'test',
    email: 'test@test.test',
    password: 'test',
} )
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )*/

/*
    email: "test@test.test"
    token: "ae379df3c31a25d0410aeddabf2c0739127db6b9"
    user_id: 2
    username: "test"
*/

/*api.kino.userAuth({ email: 'test@test.test', password: 'test' })
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )*/

export default class extends Actions {
    constructor( dispatch, data ){
        super( dispatch, data );

        this.registration = this.registration.bind(this);
        this.login = this.login.bind(this);
        this.getUser = this.getUser.bind(this);
        this.thenGetUser = this.thenGetUser.bind(this);
        this.logout = this.logout.bind(this);
    }

    thenGetUser( { token, user: { localUser, ...user } } ) {
        ls.set( 'userAuthToken', token );
        return ( { localUser, user } );
    };

    registration( username, email, password ) {
        return this.api.userRegistration( { username, email, password } )
            .then( this.thenGetUser )
    }

    login( email, password ) {
        return this.api.userAuth( { email, password } )
            .then( this.thenGetUser )
    }

    getUser() {
        return new Promise( ( resolve, reject ) => {
            if( this.data.lsUserAuthToken() )
                this.api.userMe()
                    .then( ( { user: { localUser, ...user } } ) => {
                        this.dispatch( getUser( user, localUser ) );
                        resolve( { localUser, user } )
                    } )
                    .catch( reject )
            else
                reject( 'no Token' )
        } );
    }

    logout() {
        ls.remove('userAuthToken');
        this.dispatch( logout() );
    }
}