import { createMethods, GET, HEAD, POST, PUT, PATH, DELETE } from '../../helpers/Api/';

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

const endpoints = {
    main: 'http://127.0.0.1:8000/api/v1',
    idilia: 'https://kino.rurricgames.ru/api/v1'
};

const schemas = {
    mainEndpoint: {
        endpoint: 'main'
    },
    islogin: {
        endpoint: 'main',
    }
}

const methods = {
    search: {
        url: '/search',
        method: GET,
        schemas: ['mainEndpoint'],
        checkOptions: {
            query: { required: true, value: '.*' }
        }
    },
    lastQueries: {
        url: '/lastQueries',
        method: GET,
        schemas: ['mainEndpoint', 'islogin'],
        checkOptions: {
            query: { required: true, value: '.*' }
        }
    },
    userAuth: {
        url: '/user/auth',
        method: POST,
        schemas: ['mainEndpoint'],
        checkOptions: {
            login: { required: true, value: '.*' },
            password: { required: true, value: '.*' }
        }
    },
    userRegistration: {
        url: '/user/registration',
        method: POST,
        schemas: ['mainEndpoint'],
        checkOptions: {
            login: { required: true, value: '.*' },
            email: { required: true, value: '.*@.*' },
            password: { required: true, value: '.*' }
        }
    },
    userRestorePass: {
        url: '/user/restore_pass',
        method: POST,
        schemas: ['mainEndpoint'],
        checkOptions: {
            login: { required: true, value: '.*' },
            email: { required: true, value: '.*@.*' },
            password: { required: true, value: '.*' }
        }
    },
    userMe: {
        url: '/user/me',
        method: GET,
        schemas: ['mainEndpoint', 'islogin']
    }
};

export default createMethods( endpoints, schemas, methods )