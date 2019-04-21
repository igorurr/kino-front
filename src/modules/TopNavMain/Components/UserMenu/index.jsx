import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "../../../../helpers/Router/";
import { IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import { Person } from '@material-ui/icons';

import { withKino } from "../../../../envs/Kino/";

import "./styles.scss";

import LoginModal from "./Login";
import RegistrationModal from "./Registration";
import RestorePasswordModal from "./RestorePassword";

const USER_MENU = 'USER_MENU';
const LOGIN_MENU = 'LOGIN_MENU';
const RESTORE_PASSWORD_MENU = 'RESTORE_PASSWORD_MENU';
const REGISTRATION_MENU = 'REGISTRATION_MENU';

class UserMenu extends Component {
    personRef = null;

    constructor(props) {
        super(props);

        this.state = {
            activeMenu: null,
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal( modal ){
        this.setState({ activeMenu: null })
    }

    openModal( modal ){
        this.setState({ activeMenu: modal })
    }

    render(){
        const { activeMenu } = this.state;
        const { 
            data: { userLogined },
            actions: { logout }
        } = this.props.kino;

        return (
            <>
                <LoginModal
                    open={activeMenu === LOGIN_MENU}
                    openRegistration={()=>this.openModal(REGISTRATION_MENU)}
                    openRestore={()=>this.openModal(RESTORE_PASSWORD_MENU)}
                    onClose={()=>this.closeModal(LOGIN_MENU)}
                />
                <RegistrationModal
                    open={activeMenu === REGISTRATION_MENU}
                    openLogin={()=>this.openModal(LOGIN_MENU)}
                    onClose={()=>this.closeModal(REGISTRATION_MENU)}
                />
                {/*<RestorePasswordModal
                    open={activeMenu === RESTORE_PASSWORD_MENU}
                    onClose={()=>this.closeModal(RESTORE_PASSWORD_MENU)}
                />*/}
                <Menu
                    className="user-drop-down-menu"
                    anchorEl={this.personRef}
                    open={activeMenu === USER_MENU}
                    onClose={()=>this.closeModal(USER_MENU)}
                >
                    { !userLogined() && <MenuItem
                        className="user-drop-down-menu-item"
                        onClick={()=>this.openModal(LOGIN_MENU)}
                    >
                        Login
                    </MenuItem> }
                    { !userLogined() && <MenuItem
                        className="user-drop-down-menu-item"
                        onClick={()=>this.openModal(REGISTRATION_MENU)}
                    >
                        Registration
                    </MenuItem> }
                    { userLogined() && <MenuItem
                        className="user-drop-down-menu-item"
                    >
                        <Link route='user'>
                            My account
                        </Link>
                    </MenuItem> }
                    { userLogined() && <MenuItem
                        className="user-drop-down-menu-item"
                        onClick={logout}
                    >
                        Logout
                    </MenuItem> }
                </Menu>
                <IconButton
                    onClick={()=>this.openModal(USER_MENU)}
                >
                    <Person
                        ref={el=>this.personRef=ReactDOM.findDOMNode(el)}
                    />
                </IconButton>
            </>
        );
    }
}

export default withKino(UserMenu);