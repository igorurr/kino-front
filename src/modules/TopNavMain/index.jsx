import React, { Component } from 'react';
import cn from 'classnames';
import { IconButton, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { elemInvolvedInEvent, createRef } from "../../helpers/Js/";
import { Link } from "../../helpers/Router/";

import "./styles.scss";

import githubLogo from "./img/github-logo.svg";

import { UserMenu } from "./Components/";

const Pages = () => (
    <>
        <h5 className="top-nav-main-item">
            <Link route='boolsearch'>
                    Булево поиск
            </Link>
        </h5>
        <h5 className="top-nav-main-item">
            <Link route='boolsearch'>
                    + Цитатный поиск
            </Link>
        </h5>
        <h5 className="top-nav-main-item">
            <Link route='boolsearch'>
                    + TF-IDF
            </Link>
        </h5>
        <h5 className="top-nav-main-item">
            <Link route='boolsearch'>
                    + Зонный поиск
            </Link>
        </h5>
    </>
);

const TopNavMainDesktop = ( { toggleStateOpenedMobileMenu } ) => (
    <article className={cn("top-nav-main", "desktop")}>
        <IconButton
            className="burger"
            onClick={toggleStateOpenedMobileMenu}
        >
            <Menu />
        </IconButton>
        <h1 className="top-nav-main-item logo">
            <Link route='index'>
                    Кино
            </Link>
        </h1>
        <Pages />
        <IconButton>
            <img 
                src={githubLogo}
                className="github-logo"
            />
        </IconButton>
        <UserMenu />
    </article>
);

const TopNavMainMobile = () => (
    <article className={cn("top-nav-main", "mobile")}>
        <Pages />
    </article>
);

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpened: false
        };

        this.clickBackgroundAndClose = this.clickBackgroundAndClose.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.toggleStateOpenedMobileMenu = this.toggleStateOpenedMobileMenu.bind(this);
    }

    clickBackgroundAndClose( e ) {
        if( !elemInvolvedInEvent( e, this.topNavMainMobileRef.dom ) )
            return;

        this.closeMobileMenu();
    }

    openMobileMenu() {
        document.addEventListener( 'click', this.checkClickBackgroundAndClose );

        this.setState( { menuOpened: true } );
    }

    closeMobileMenu() {
        document.removeEventListener( 'click', this.checkClickBackgroundAndClose );

        this.setState( { menuOpened: false } );
    }

    toggleStateOpenedMobileMenu() {
        const { menuOpened } = this.state;

        if( menuOpened )
            this.closeMobileMenu();
        else
            this.openMobileMenu();
    }

    render() {
        const { menuOpened } = this.state;

        return (
            <>
                <TopNavMainDesktop
                    toggleStateOpenedMobileMenu={this.toggleStateOpenedMobileMenu}
                />
                { menuOpened && <TopNavMainMobile ref={createRef(this, 'topNavMainMobileRef')} /> }
            </>
        );
    }
}