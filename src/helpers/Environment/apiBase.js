import { createMethods } from '../Api/';

/*
    методы хранятся у каждого окружения отдельно, в createEnv подбираешь методы апи, компилишь их и отдаёшь объект как параметр в Actions

    schemas: в каждом методе имеется список схем, которые будут применены к объекту (то есть поля каждой схемы просто будут подставлены 
    в метод апи в том порядке в котором они были объявлены)

    preload: функция, которая будет делать обработку данных метода api (подаётся на вход объект содержащий поля headers и options, синхронно получаем дополнительные
    данные если они нужны что то с ними делаем, можем как-то преобразовать исходные данные)
    эта тема подходит для автоподстановки токена юзера для методов где нужна авторизация юзера

    храним схемы и endpointы в одном файле, компулируем и экспортируем, там где они нужны их поймают

    'me': {
        url: '/me',
        method: GET,
        endpoint: 'main',
        schemas: ['mainEndpoint', 'islogin'],
        checkHeaders: {
            auth_token: '[0-9a-zA-Z]{32}'
        },
        defHeaders: {
            key: 'val'
        },
        checkOptions: {
            login: { required: true, value: '.*' },
            password: { required: true, value: '.*' }
        },
        defOptions: {
            key: 'val'
        },
        preload: (options, headers) => [options, headers]
    },
*/

export class Api {
    data = null;

    __endpoints__ = null;
    __schemas__ = null;
    __methods__ = null;

    methods = null;

    constructor( _data ) {
        this.data = _data;

        this.initEndpoints = this.initEndpoints.bind(this);
        this.initSchemas = this.initSchemas.bind(this);
        this.initMethods = this.initMethods.bind(this);
        this.compileApi = this.compileApi.bind(this);
    }

    initEndpoints( endpoints ) {
        this.__endpoints__ = endpoints;
    }

    initSchemas( schemas ) {
        this.__schemas__ = schemas;
    }

    initMethods( methods ) {
        this.__methods__ = methods;
    }

    compileApi() {
        this.methods = createMethods( 
            this.__endpoints__, 
            this.__schemas__, 
            this.__methods__
        )
    }
}