import React, { Component } from 'react';

import api from "../../../envs/api";

import { Main } from "../../../modules/PageBody/index";

import TopNavMain from "../../../modules/TopNavMain/";
import Header from "./Header";
import RightNav from "./RightNav";
import Footer from "../../../modules/FooterMain";

import Films from "./Films";


class Boolsearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Main
                topNavContent={<TopNavMain />}
                headerContent={<Header />}
                rightNavContent={<RightNav />}
                footerContent={<Footer />}
            >
                <Films />
            </Main>
        );
    }

    componentWillMount() {
        /*api.kino.userMe( {id: 4} )
            .then( resp => console.log(resp) )
            .catch( resp => console.log(resp) )*/
            
        /*api.kino.userRegistration( {
            username: 'test',
            email: 'test@test.test',
            password: 'test',
        } )
            .then( resp => console.log(resp) )
            .catch( resp => console.log(resp) )*/

        /*
            email: "test@test.test"
            token: "ae379df3c31a25d0410aeddabf2c0739127db6b9"
            user_id: 2
            username: "test"
        */

       api.kino.userMe()
            .then( resp => console.log(resp) )
            .catch( resp => console.log(resp) )
    }
}

export default Boolsearch;