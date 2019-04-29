import React from 'react';
import cn from 'classnames';

import Pages from "./Pages";

import "./styles.scss";

export default ( { refElem } ) => (
    <article ref={refElem} className={cn("top-nav-main", "mobile")}>
        <Pages />
    </article>
);