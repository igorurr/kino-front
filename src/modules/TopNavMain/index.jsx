import React, { Component } from 'react';

import { elemInvolvedInEvent, createRef } from "../../helpers/Js/";

import TopNavMainDesktop from './Components/TopNavMainDesktop';
import TopNavMainMobile from './Components/TopNavMainMobile';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpened: false
        };

        this.checkClickBackgroundAndClose = this.checkClickBackgroundAndClose.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.toggleStateOpenedMobileMenu = this.toggleStateOpenedMobileMenu.bind(this);
    }

    checkClickBackgroundAndClose( e ) {
        if( elemInvolvedInEvent( e, this.topNavMainMobileRef.dom ) )
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
                { menuOpened && <TopNavMainMobile refElem={createRef(this, 'topNavMainMobileRef')} /> }
            </>
        );
    }
}