import { createSelector } from "reselect";

import { Data } from "../../helpers/Environment";

const filmsSelector = store => store.films;

const isLoadingSelector =  createSelector(
    filmsSelector,
    films => films.isLoading
);

const currentTypeSelector =  createSelector(
    filmsSelector,
    films => films.currentType
);

const querySelector = createSelector(
    filmsSelector,
    currentTypeSelector,
    ( films, current ) => films[current].query
);

const resultsSelector = createSelector(
    filmsSelector,
    currentTypeSelector,
    ( films, current ) => films[current].results
);

const nextIsset = createSelector(
    filmsSelector,
    currentTypeSelector,
    ( films, current ) => films[current].nextIsset
);

const allresultsSelector = createSelector(
    resultsSelector,
    ( films ) => Object.keys(films).reduce( 
        ( acc, cur ) => [ ...acc, ...films[cur] ],
        []
    )
);

const lastPageSelector = createSelector(
    resultsSelector,
    ( films ) => Math.max( ...Object.keys( films ).map( page => parseInt(page) ) )
);

export default class extends Data {
    constructor( state ){
        super(state);

        this.allFilms = this.allFilms.bind(this);
        this.filmsOnPage = this.filmsOnPage.bind(this);
        this.isLoading = this.isLoading.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.query = this.query.bind(this);
        this.nextIsset = this.nextIsset.bind(this);
    }

    allFilms() {
        return allresultsSelector( this.state );
    }

    filmsOnPage( page ) {
        return resultsSelector( this.state )[page];
    }

    isLoading() {
        return isLoadingSelector( this.state );
    }

    lastPage() {
        return lastPageSelector( this.state );
    }

    query() {
        return querySelector( this.state );
    }

    nextIsset() {
        return nextIsset( this.state );
    }
}