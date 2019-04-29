import React, { Component } from 'react';

import AppLoader from '../modules/AppLoader/';

import { withKino } from '../envs/Kino';

class AppDataLoader extends Component {
    constructor( props ) {
        super( props );

        this.isReady          = this.isReady.bind(this);
        this.successIsReady   = this.successIsReady.bind(this);

        this.state = {
            dataIsReady:{
                getUserIsReady: false
            }
        }
    }

    isReady() {
        const { dataIsReady } = this.state;

        return Object.keys(dataIsReady).reduce( (acc, key) => acc && dataIsReady[key], true );
    }

    successIsReady( arg ) {
        this.setState( state => ({ dataIsReady: {
            ...state.dataIsReady, 
            [arg+'IsReady']: true 
        } }) );
    }

    render() {
        if( !this.isReady() )
            return (
                <AppLoader />
            )

        return this.props.children;
    }

    componentDidMount() {
        this.props.kino.actions.getUser()
            .then( ()=>this.successIsReady( 'getUser' ) )
            .catch( ()=>this.successIsReady( 'getUser' ) )
    }
}

export default withKino(AppDataLoader);