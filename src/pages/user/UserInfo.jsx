import React, { Component } from 'react';

import { Avatar, Tooltip } from '@material-ui/core';

import "./styles.scss";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        const {} = this.state;

        return (
            <article className='page-user-user-info'>  
                <Tooltip title="Add"> 
                    <Avatar alt="avatar" src="http://crosti.ru/patterns/00/09/59/dc0d3fd8fa/picture.jpg" />
                </Tooltip>
                <article className='data-section'>
                    <div className="line">
                        <header>логин:</header>
                        <p>логин, который можно писать по-русски</p>
                    </div>
                    <div className="line">
                        <header>email:</header>
                        <p>user@rurricgames.ru</p>
                    </div>
                    <div className="line">
                        <header>телефон:</header>
                        <p>+45876895241</p>
                    </div>
                </article>
                <article className='data-section'>
                    <div className="line">
                        <header>Дата регистрации:</header>
                        <p>19.11.1985</p>
                    </div>
                    <div className="line">
                        <header>Последний раз онлайн:</header>
                        <p>
                            Дата
                            <br />
                            город
                        </p>
                    </div>
                </article>
                <article className='cash-balance'>
                    <header>На счету:</header>
                    <p>985 р</p>
                </article>
            </article>
        );
    }
}