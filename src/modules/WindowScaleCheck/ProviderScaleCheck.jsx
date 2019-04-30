import React, { Component } from 'react';

export const ContextScaleCheck = React.createContext('ScaleCheck');


/*
    resolutionsNames: [ 'name1', 'name2', 'name3' ],
    resolutionsSizes: [ 
        250,    // end name1 resolution in pixels and start name2 resolution,
        700,    // end name2 resolution in pixels and start name3 resolution
    ]
*/
class ProviderScaleCheck extends Component {

    constructor(props){
        super(props);

        this.initDefaultResolutions = this.initDefaultResolutions.bind(this);
        this.initResolutions = this.initResolutions.bind(this);
        this.getResolutionChildren = this.getResolutionChildren.bind(this);
        this.getResolution = this.getResolution.bind(this);
        this.checkResize = this.checkResize.bind(this);

        this.state = { 
            ...this.initResolutions()
        };

        this.state.resolution = this.getResolution();
    }

    initDefaultResolutions() {
        return {
            resolutionsNames: [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ], 
            resolutionsSizes: [ 400, 576, 768, 992, 1200, 1600 ]
        }
    }

    initResolutions() {
        const { resolutionsNames, resolutionsSizes } = this.props;

        if( !resolutionsNames && !resolutionsSizes )
            return this.initDefaultResolutions();

        if( !resolutionsNames || !resolutionsSizes ) {
            throw('передан только один из требуемых списков разрешений');
        }

        if( resolutionsNames.length !== resolutionsSizes.length+1 ) {
            throw('неверная длина списков разрешений');
        }

        let resolutionValuesError = resolutionsSizes.reduce( 
            ( acc, val ) => {
                acc.res |= acc.oldVal > val;
                acc.oldVal = val;
            }, 
            { res: false, oldVal: 0 }
        );

        if( resolutionValuesError ) {
            throw('последовательность списка значений разрешений невозрастающая');
        }

        return { resolutionsNames, resolutionsSizes };
    }

    getResolution() {
        const { resolutionsNames, resolutionsSizes } = this.state;

        const curWidth = window.innerWidth;

        let curIndex = 0;

        for( ; curIndex < resolutionsSizes.length; curIndex++ )
            if( curWidth < resolutionsSizes[curIndex] )
                break;

        return resolutionsNames[curIndex];
    }

    checkResize() {
        const { resolution } = this.state;
        const curResolution = this.getResolution();

        if( resolution === curResolution )
            return;

        this.setState( { resolution: curResolution } );
    }

    render() {
        const { children } = this.props;
        const { resolution, resolutionsNames, resolutionsSizes } = this.state;

        const scaleCheck = {
            resolution, 
            resolutionsNames, 
            resolutionsSizes
        }

        return (
            <ContextScaleCheck.Provider value={scaleCheck} >
                { children }
            </ContextScaleCheck.Provider>
        );
    }

    componentDidMount() {
        window.addEventListener( 'resize', this.checkResize );
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.checkResize );
    }
}

export default ProviderScaleCheck;