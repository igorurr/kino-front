import React, { Component } from 'react';

import "./styles.scss";

import { withKino } from '../../envs/Kino'

import { Main } from "../../modules/PageBody/";
import TopNavMain from "../../modules/TopNavMain/";
import Footer from "../../modules/FooterMain";

import UserInfo from "./UserInfo";
import Favorites from "./Favorites";
import LastItems from "./LastItems";
import HistorySearch from "./HistorySearch";
import PriorityRecomended from "./PriorityRecomended";

import { Redirect } from "../../helpers/Router";

const PRIORITY_RECOMENDED = 'PRIORITY_RECOMENDED';
const HISTORY_SEARCH = 'HISTORY_SEARCH';
const FAVORITES = 'FAVORITES';
const LAST_FILMS = 'LAST_FILMS';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: null
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(tab) {
        this.setState({ currentTab: tab })
    }

    render() {
        const { currentTab } = this.state;

        if( !this.props.kino.data.userLogined() )
            return ( <Redirect route='index' hash='login' /> );

        return (
            <Main
                title="Юзер"
                topNavContent={<TopNavMain />}
                footerContent={<Footer />}
            >
                <main className="page-user">
                    <UserInfo />
                    <PriorityRecomended />
                    <HistorySearch />
                    <Favorites />
                    <LastItems />
                </main>
            </Main>
        );
    }
}

export default withKino(User);