import React from 'react';

import { Link } from "../../../helpers/Router/";

export default () => (
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