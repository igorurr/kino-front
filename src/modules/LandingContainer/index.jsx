import React, { Component } from 'react';

import "./styles.scss";

export default ( {children} ) => (
    <article className="landing-container">
        {children}
    </article>
);