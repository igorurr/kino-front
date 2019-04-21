import React, { Component } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

import { TextField, Button, Modal, List, LoadingScreen } from '../../../Atomic';

import { withKino } from "../../../../envs/Kino/";

import "./styles.scss";

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Поле не должно быть пустым')
        .email('Некорректный email'),
    password: yup.string()
        .required('Поле не должно быть пустым')
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit( values, { setErrors } ) {
        this.setState( { isLoading: true } );

        this.props.kino.actions.login( values.email, values.password )
            .then( response => {
                this.setState( { isLoading: false } );
                console.log(values, response)
            } )
            .catch( reason => {
                this.setState( { isLoading: false } );
                console.log(values, reason)
                setErrors( reason )
            } )
    }

    render(){
        const { 
            open, onClose, openRegistration
        } = this.props;

        const { isLoading } = this.state;

        return (
            <Modal
                open={open}
                onClose={onClose}
                className="login-modal"
            >
                <LoadingScreen
                    isLoading={isLoading}
                >
                    <Formik
                        validationSchema={validationSchema}
                        onSubmit={this.handleSubmit}
                        validateOnChange={false}
                        render={( { handleSubmit, handleChange, values, errors } ) => (
                            <form onSubmit={handleSubmit}>
                                <article className="login-modal-item">
                                    <TextField
                                        error={Boolean(errors.email)}
                                        label='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                    />  
                                    <p className="login-modal-item-error">{errors.email}</p>
                                </article>
                                <article className="login-modal-item">
                                    <TextField
                                        error={Boolean(errors.password)}
                                        label='password'
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <p className="login-modal-item-error">{errors.password}</p>
                                </article>
                                <Button type="submit" variant='outlined' text='Login' />
                            </form>
                        )}
                    />
                </LoadingScreen>
                <p>
                    Если вы не зарегистрированы, вы можете 
                    <a onClick={openRegistration}> зарегистрироваться </a>
                </p>
            </Modal>
        );
    }
}

export default withKino(Login);