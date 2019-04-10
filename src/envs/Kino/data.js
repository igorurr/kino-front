import { createSelector } from "reselect";

import { Data } from "../../helpers/Environment";

const isLoadingSelector = store => store.kino.isLoading;

const userSelector = store => store.kino.user;

export default class extends Data {
    constructor( state ){
        super(state);

        this.isLoading = this.isLoading.bind(this);
        this.user = this.user.bind(this);
        this.userSettings = this.userSettings.bind(this);
    }

    isLoading() {
        return isLoadingSelector( this.state );
    }

    user() {
        return userSelector( this.state );
    }

    userLogined() {
        const { id } = userSelector( this.state );

        return id >= 0;
    }

    userName() {
        const { name } = userSelector( this.state );

        return this.userLogined() ? name : 'Гость';
    }

    userSettings() {
        return userSelector( this.state ).settings;
    }
}