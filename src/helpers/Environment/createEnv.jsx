import React from "react";
import { connect } from "react-redux";

const createEnvMethods = ( DataClass, ActionsClass, ApiClass ) => {
    const data = new DataClass();
    const api = new ApiClass( data );
    const actions = new ActionsClass( data, api.methods );

    return {
        actions,
        data
    }
};

const updateRedux = ( env, state, dispatch ) => {
    env.data.updateRedux( state );
    env.actions.updateRedux( dispatch );
}

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({dispatch});

export const createEnv = ( DataClass, ActionsClass, ApiClass, name ) => {
    const env = createEnvMethods( DataClass, ActionsClass, ApiClass );
    
    return (Comp) =>
        connect( 
            mapStateToProps, 
            mapDispatchToProps
        )( 
            ({ state, dispatch, ...props }) => {
                updateRedux( env, state, dispatch );
                return (
                    <Comp
                        {...{ [name]: env}}
                        {...props}
                    />
                )
            } 
        );
}