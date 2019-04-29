import React, { Component } from 'react';

import Film from "../../modules/Film/";

import "./styles.scss";

const defFilm = { 
    id: 4,
    name: 'gf',
    actors: 'fgdf40gdfg',
    description: 'gfdgdfg',
    img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
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
            <article className='page-user-item page-user-priority-recomended'>
                <header>
                    Последние просмотренные
                </header>
                <nav>
                    
                </nav>
                <main className="page-user-priority-recomended-films-container">
                    <Film 
                        className="film"
                        film={defFilm}
                    />
                    <Film
                        className="film"
                        film={defFilm}
                    />
                    <Film
                        className="film"
                        film={defFilm}
                    />
                </main>
            </article>
        );
    }
}