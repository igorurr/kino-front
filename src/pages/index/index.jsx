import React, { Component } from 'react';

import "./styles.scss";

import { Main } from "../../modules/PageBody/";
import TopNavMain from "../../modules/TopNavMain/";

import Header from "./Header";
import Footer from "../../modules/FooterMain";
import Container from "../../modules/LandingContainer/";

export default class extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        //const { store } = this.props;

        return (
            <Main
                title="Кино - главная"
                classes="page-index"
                topNavContent={<TopNavMain />}
                headerContent={<Header />}
                footerContent={<Footer />}
            >
                <div className="main-landing">
                    <Container>
                        описание этого всего
                        <h5>
                            Информационный поиск, при котором информационный запрос
                            формируется с помощью булевских операторов, иначе говоря, 
                            поиск с использованием логических операторов в запросе. При 
                            поиске по условию "танос && марвел" будут выбраны только 
                            те записи или документы, которые содержат одновременно и 
                            упоминание таноса, и упоминание марвел
                        </h5>
                    </Container>
                    <Container>
                        Булево поиск
                    </Container>
                    <Container>
                        + Цитатный поиск
                    </Container>
                    <Container>
                        + TF-IDF
                    </Container>
                    <Container>
                        Зонный поиск
                    </Container>
                    <Container>
                        карусель
                    </Container>
                </div>
            </Main>
        );
    }
}