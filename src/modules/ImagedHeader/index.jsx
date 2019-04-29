import React, {Component} from 'react';

import "./styles.scss";

const DEFAULT_MAX_SCROLL_POSITION = 800; // px

export default class extends Component {
    constructor(props){
        super(props);

        this.state = {
            yoffset: 100,
            maxScrollPosition: props.maxScrollPosition || DEFAULT_MAX_SCROLL_POSITION,
            image: this.getRndImg()
        };

        this.recalculateYOffset = this.recalculateYOffset.bind(this);
        this.getRndImg = this.getRndImg.bind(this);
    }

    getRndImg() {
        const { imgs } = this.props;
        return imgs[ parseInt( Math.random() * imgs.length, 10 ) ];
    }

    recalculateYOffset() {
        const { maxScrollPosition } = this.state;

        const yoffset = ( 
            1 - (
                Math.min( maxScrollPosition, document.documentElement.scrollTop ) /
                maxScrollPosition
            )
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