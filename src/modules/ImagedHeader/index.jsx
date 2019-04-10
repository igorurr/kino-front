import React, {Component} from 'react';

import "./styles.scss";

const MAX_SCROLL_POSITION = 800; // px

const imgs = [
    '/img/header/1.jpg',
    '/img/header/2.jpg',
    '/img/header/3.jpg',
    '/img/header/4.jpg',
    '/img/header/5.jpg',
    '/img/header/6.jpg',
];

const getRndImg = () => {
    return imgs[ parseInt( Math.random() * imgs.length ) ];
};

export default class extends Component {
    constructor(props){
        super(props);

        this.state = {
            yoffset: 0,
            image: getRndImg()
        };

        this.recalculateYOffset = this.recalculateYOffset.bind(this);
    }

    recalculateYOffset() {
        const yoffset = ( 
            Math.min( MAX_SCROLL_POSITION, document.documentElement.scrollTop ) /
            MAX_SCROLL_POSITION 
        ) * 100;

        this.setState({ yoffset });
    }

    render() { 
        const { 
            props: { children },
            state: { yoffset, image }
        } = this;

        return (
            <div 
                className="imaged-header"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPositionY: `${yoffset}%`
                }}
            >
                <main>
                    {children}
                </main>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.recalculateYOffset );
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.recalculateYOffset );
    }
};