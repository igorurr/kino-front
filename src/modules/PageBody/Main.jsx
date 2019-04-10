import React from 'react';
import { Helmet } from "react-helmet";
import cn from 'classnames';

import "./styles.scss";

import TopNav from "./TopNav";
import Header from "./Header";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Footer from "./Footer";

export default ({ 
    children, 
    classes='',
    topNavContent, 
    headerContent,
    leftNavContent, 
    rightNavContent, 
    footerContent,
    title
}) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <main className={cn(classes)}>
            {topNavContent && <TopNav>{topNavContent}</TopNav>}
            {headerContent && <Header>{headerContent}</Header>}
            {leftNavContent && <LeftNav>{leftNavContent}</LeftNav>}
            {rightNavContent && <RightNav>{rightNavContent}</RightNav>}
            {children}
            {footerContent && <Footer>{footerContent}</Footer>}
        </main>
    </>
);