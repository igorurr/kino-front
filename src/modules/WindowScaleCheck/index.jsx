import React, { Component } from 'react';

const xxs = 400;
// xs
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;
const xxl = 1600;

const XXS = 0;
const XS = 1;
const SM = 2;
const MD = 3;
const LG = 4;
const XL = 5;
const XXL = 6;

/*
    создать компонент провайдер в нём чекать текущее разрешение при ресайзе, там же инициировать резолюшоны приложения
    при изменении резолюшона отправлять данные в подписчиков данного провайдера

    подписчики 2 типов: 
        showOnResolution( ['xl', 'sm'], (<p>sasa</p>) )
        showOnResolution( 'lg', (<p>sasa</p>) )
        WindowScaleCheck
*/

// не особо гуд, лучше переделать способ передачи ребёнков, сделать его более универсальным
class WindowScaleCheck extends Component {

    constructor(props){
        super(props);

        this.getResolutionChildren = this.getResolutionChildren.bind(this);
        this.getResolution = this.getResolution.bind(this);
        this.checkResize = this.checkResize.bind(this);

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

    getResolution() {
        const curWidth = window.innerWidth;

        if( curWidth < xxs )
            return XXS;

        if( curWidth >= xxs && curWidth < sm )
            return XS;

        if( curWidth >= sm && curWidth < md )
            return SM;

        if( curWidth >= md && curWidth < lg )
            return MD;

        if( curWidth >= lg && curWidth < xl )
            return LG;

        if( curWidth >= xl && curWidth < xxl )
            return XL;

        return XXL;
    }

    checkResize() {
        const { resolution } = this.state;
        const curResolution = this.getResolution();

        if( resolution === curResolution )
            return;

        this.setState( { resolution: curResolution } );
    }

    render() {
        return this.getResolutionChildren();
    }

    componentDidMount() {
        window.addEventListener( 'resize', this.checkResize );
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.checkResize );
    }
}

export default WindowScaleCheck;