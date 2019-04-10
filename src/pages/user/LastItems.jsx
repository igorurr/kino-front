import React, { Component } from 'react';

import Film from "../../modules/Film/";

import "./styles.scss";

const defFilm = { 
    id: 4,
    name: 'gf',
    actors: 'fgdf40gdfg',
    description: 'gfdgdfg',
    img: 'r454t'
  };

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        //const {  } = this.store;

        return (
            <article className='page-user-last-items'>
                <header>
                    Последние просмотренные
                </header>
                <nav>
                    <p>фильтр:</p>
                    <p>сортировать по:</p>
                </nav>
                <main>
                    <Film film={defFilm} />
                    <Film film={defFilm} />
                    <Film film={defFilm} />
                </main>
            </article>
        );
    }
}