import React from "react";
import { connect } from "react-redux";

export class Data {
    state = {};

    constructor( _state ) {
        this.state = _state;
    }
}

export class Actions {
    data = null;
    dispatch = null;

    constructor( _dispatch, _data ) {
        this.dispatch = _dispatch;
        this.data = _data;
    }
}

const createEnvMethods = ( state, dispatch, DataClass, ActionsClass ) => {
    const data = new DataClass( state );

    return {
        actions: new ActionsClass( dispatch, data ),
        data
    }
};

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({dispatch});

export const createEnv = ( DataClass, ActionsClass, name ) => (Comp) =>
    connect( 
        mapStateToProps, 
        mapDispatchToProps
    )( 
        ({ state, dispatch, ...props }) => (
            <Comp
                {...{ [name]: createEnvMethods( state, dispatch, DataClass, ActionsClass )}}
                {...props}
            />
        ) 
    );