import React, { Component } from 'react';

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
}

export default Boolsearch;