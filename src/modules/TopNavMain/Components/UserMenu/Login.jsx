import React, { Component } from 'react';

import { TextField, Button, Modal, List } from '../../../Atomic';

import { withKino } from "../../../../envs/Kino/";

import "./styles.scss";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        const { open, onClose, openRegistration } = this.props;

        return (
            <Modal
                open={open}
                onClose={onClose}
                className="login-modal"
            >
                <List>
                    <TextField
                        label='login'
                    />  
                    <TextField
                        label='password'
                        type='password'
                    />  
                    <Button variant='outlined' text='Login' />
                    <p>
                        Если вы не зарегистрированы, вы можете 
                        <a onClick={openRegistration}> зарегистрироваться </a>
                    </p>
                </List>
            </Modal>
        );
    }
}

export default withKino(Login);