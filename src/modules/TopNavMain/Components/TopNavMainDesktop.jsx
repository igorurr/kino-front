import React from 'react';
import cn from 'classnames';

import { IconButton, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { Link } from "../../../helpers/Router/";
import Pages from "./Pages";

import githubLogo from "./img/github-logo.svg";

import UserMenu from "../UserMenu";

import "./styles.scss";

export default ( { toggleStateOpenedMobileMenu } ) => (
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
                alt="github-logo"
            />
        </IconButton>
        <UserMenu />
    </article>
);