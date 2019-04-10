import { 
    fetchBoolSearch,
    isLoading
} from "./reduxActions";

import { Actions } from "../../helpers/Environment";

const data = {
    films: [
        {
            id: 0,
            name: 'film 0',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 1,
            name: 'film 1',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 2,
            name: 'film 2',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 3,
            name: 'film 3',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 4,
            name: 'film 4',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 5,
            name: 'film 5',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 6,
            name: 'film 6',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 7,
            name: 'film 7',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 8,
            name: 'film 8',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 9,
            name: 'film 9',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 10,
            name: 'film 10',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 11,
            name: 'film 11',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 12,
            name: 'film 12',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 13,
            name: 'film 13',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        },
        {
            id: 14,
            name: 'film 14',
            aters: 'actors film 0',
            description: 'aclmors tl f 0tors filmlmors f 0tolmortors frlmormors f 0tors filmlmors f 0tof 0 f 0tors filmlmors f 0tos fi 0',
            img: 'https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg'
        }
    ]
};

export default class extends Actions {
    constructor( dispatch, data ){
        super( dispatch, data );

        this.boolSearch = this.boolSearch.bind(this);
        this.boolSearchNext = this.boolSearchNext.bind(this);
        this.quoteSearch = this.quoteSearch.bind(this);
        this.tfidfSearch = this.tfidfSearch.bind(this);
        this.areaSearch = this.areaSearch.bind(this);
    }

    boolSearch( query, page ) {
        this.dispatch( isLoading(true) );

        return new Promise( ( resolve, reject ) => {
            setTimeout( ()=>{
                // именно в таком порядке
                // ибо существую ошибки которые после обновления когда излоадинг тру а данных нет
                // бугуртить начинают
                this.dispatch( fetchBoolSearch( query, page, data.films, true ) );
                this.dispatch( isLoading(false) );

                resolve( data )
            }, 1200 );
        } );
    }

    boolSearchNext() {
        const { lastPage, query } = this.data;

        this.dispatch( isLoading(true) );

        return new Promise( ( resolve, reject ) => {
            setTimeout( ()=>{
                this.dispatch( fetchBoolSearch( query(), lastPage()+1, data.films, true ) );
                this.dispatch( isLoading(false) );

                resolve( data )
            }, 1200 );
        } );
    }

    quoteSearch( query ) {
        console.log( 'quoteSearch', query );
        return new Promise( ( resolve, reject ) => {
            setTimeout( ()=>{
                resolve( data )
            }, 1200 );
        } );
    }

    tfidfSearch( query ) {
        console.log( 'tfidf', query );
        return new Promise( ( resolve, reject ) => {
            setTimeout( ()=>{
                resolve( data )
            }, 1200 );
        } );
    }

    areaSearch( query ) {
        console.log( 'areaSearch', query );
        return new Promise( ( resolve, reject ) => {
            setTimeout( ()=>{
                resolve( data )
            }, 1200 );
        } );
    }
}