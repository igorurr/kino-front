import React, { Component } from 'react';

import { ContextScaleCheck } from './ProviderScaleCheck';

/*
class WindowScaleCheck extends Component {

    constructor(props){
        super(props);

        this.defaultAlgorithmGetChildren = this.defaultAlgorithmGetChildren.bind(this);
        this.getResolutionChildren = this.getResolutionChildren.bind(this);
    }

    // вернуть первого подходящего ребёнка из существующих детей, сначала после текущих разрешений, затем до них
    // пример: существуют дети для md
    // допустим текущее разрешение md: просто возвращаем ребёнка md
    //                            xxs: ребёнка для xxs у нас нет, ищем среди следующих: для xs нет, идём дальше, для md есть, возвращаем его
    //                             xl:  для xl ребёнка нет, идём дальше: для xxl тоже нету, возвращаемся до xl, предыдущий lg, для него тоже нету,
    //                                          идём на 1 назад, для md есть - возвращаем его
    defaultAlgorithmGetChildren( scaleCheck ) {
        const { xxsCh, xsCh, smCh, mdCh, lgCh, xlCh, xxlCh } = this.props;
        const childs = [ xxsCh, xsCh, smCh, mdCh, lgCh, xlCh, xxlCh ];

        const { resolution } = this.state;

        let retIndex = resolution;

        for( ; retIndex < childs.length; retIndex++ )
            if( childs[retIndex] )
                return childs[retIndex];

        retIndex = resolution-1;

        for( ; retIndex >= 0; retIndex-- )
            if( childs[retIndex] )
                return childs[retIndex];

        throw( 'не передано ни одного ребёнка' );
    }

    getResolutionChildren( scaleCheck ) {

    }

    render() {
        return (
            <ContextScaleCheck.Consumer>
                { scaleCheck => this.getResolutionChildren( scaleCheck ) }
            </ContextScaleCheck.Consumer>
        );
    }
};

export default showOnResolution;







class WindowScaleCheck extends Component {

    constructor(props){
        super(props);

        this.getResolutionChildren = this.getResolutionChildren.bind(this);

        this.state = {
            resolution: this.getResolution()
        }
    }

    // вернуть первого подходящего ребёнка из существующих детей, сначала после текущих разрешений, затем до них
    // пример: существуют дети для md
    // допустим текущее разрешение md: просто возвращаем ребёнка md
    //                            xxs: ребёнка для xxs у нас нет, ищем среди следующих: для xs нет, идём дальше, для md есть, возвращаем его
    //                             xl:  для xl ребёнка нет, идём дальше: для xxl тоже нету, возвращаемся до xl, предыдущий lg, для него тоже нету,
    //                                          идём на 1 назад, для md есть - возвращаем его
    getResolutionChildren() {
        const { xxsCh, xsCh, smCh, mdCh, lgCh, xlCh, xxlCh } = this.props;
        const childs = [ xxsCh, xsCh, smCh, mdCh, lgCh, xlCh, xxlCh ];

        const { resolution } = this.state;

        let retIndex = resolution;

        for( ; retIndex < childs.length; retIndex++ )
            if( childs[retIndex] )
                return childs[retIndex];

        retIndex = resolution-1;

        for( ; retIndex >= 0; retIndex-- )
            if( childs[retIndex] )
                return childs[retIndex];

        throw( 'не передано ни одного ребёнка' );
    }

    render() {
        return this.getResolutionChildren();
    }
}

export default WindowScaleCheck;*/