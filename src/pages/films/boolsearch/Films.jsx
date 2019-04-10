import React, { Component } from 'react';

import { withFilms } from "../../../envs/Films";

import "./styles.scss";

import Film from "../../../modules/Film/";

const MIN_DOWN_OFFSET = 1700;

class Films extends Component {
    constructor(props) {
        super(props);

        this.getFilmsOnStart = this.getFilmsOnStart.bind(this);
        this.checkDownOffset = this.checkDownOffset.bind(this);
        this.subscribeOnScroll = this.subscribeOnScroll.bind(this);
        this.describeOnScroll = this.describeOnScroll.bind(this);
    }

    render() {
        const { 
            films: {
                data: { allFilms, isLoading, boolSearchNextIsset }
            }
        } = this.props;
        
        return (
            <div className="films-result">

                {!isLoading() && allFilms().length === 0 && (
                   <p>ничего не найдено</p> 
                )}

                {allFilms().length !== 0 && allFilms().map( film => (
                    <Film film={film} />
                ))}

                {isLoading() && (
                    <p>Загрузка</p> 
                )}
            </div>
        );
    }

    getFilmsOnStart(){
        const { 
            films: {
                actions: { boolSearch }
            }
        } = this.props;

        boolSearch( '', 0 );
    }

    checkDownOffset() {
        const { 
            actions: { boolSearchNext },
            data: { isLoading, nextIsset }
        } =  this.props.films;

        const offset = document.documentElement.offsetHeight - window.scrollY - window.innerHeight;

        if( !isLoading() && nextIsset() && offset < MIN_DOWN_OFFSET ) {
            boolSearchNext();
        }
    }
    
    subscribeOnScroll() {
        window.addEventListener('scroll', this.checkDownOffset);
    }

    describeOnScroll() {
        window.removeEventListener('scroll', this.checkDownOffset);
    }

    componentDidMount(){
        this.getFilmsOnStart();
        this.subscribeOnScroll();
    }

    componentDidUpdate(){
        this.checkDownOffset();
    }

    componentWillUnmount(){
        this.describeOnScroll();
    }
}

export default withFilms( Films );