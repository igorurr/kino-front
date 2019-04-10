import React, { Component } from 'react';

import { TextField, Button, Modal, List } from '../../../Atomic';

import { withKino } from "../../../../envs/Kino/";

import "./styles.scss";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        const { open, onClose, openLogin } = this.props;

        return (
            <Modal
                open={open}
                onClose={onClose}
                className="registration-modal"
            >
                <List>
                    <TextField
                        label='login'
                    />  
                    <TextField
                        label='email'
                    />  
                    <TextField
                        label='password'
                        type='password'
                    /> 
                    <TextField
                        label='confirm password'
                        type='password'
                    />  
                    <Button variant='outlined' text='Login' />
                    <p>
                        Если вы уже зарегистрированы, вы можете 
                        <a onClick={openLogin}> войти </a>
                        под своим логином
                    </p>
                </List>
            </Modal>
        );
    }
}

export default withKino(Registration);