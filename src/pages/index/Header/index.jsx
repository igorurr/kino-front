import React, { Component } from 'react';

import img0 from './img/0.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';

import ImagedHeader from "../../../modules/ImagedHeader/";

const imgs = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
];

export default ( {} ) => (
    <ImagedHeader
        imgs={imgs}
    >
        <h1>Кино</h1>
        <h4>Найди фильм на вечер</h4>
    </ImagedHeader>
);