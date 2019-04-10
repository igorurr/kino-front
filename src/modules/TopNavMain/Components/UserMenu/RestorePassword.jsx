import React, { Component } from 'react';

import { TextField, Button, Modal } from '../../../Atomic';

import { withKino } from "../../../../envs/Kino/";

import "./styles.scss";

class RestorePassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        const { open, onClose } = this.props;

        return (
            <Modal
                open={open}
                onClose={onClose}
                className="restore-password-modal"
            >
                <TextField
                    label='login'
                />  
                <TextField
                    label='password'
                    type='password'
                />  
                <Button variant='outlined' text='Login' />
            </Modal>
        );
    }
}

export default withKino(RestorePassword);