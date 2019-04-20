import { createSelector } from "reselect";
import ls from "../../helpers/LocalStorrage";

import { Data } from "../../helpers/Environment";

const isLoadingSelector = store => store.kino.isLoading;

const userSelector = store => store.kino.user;
const localUserSelector = store => store.kino.localUser;

export default class extends Data {
    constructor( state ){
        super(state);

        this.isLoading = this.isLoading.bind(this);
        this.user = this.user.bind(this);
        this.userSettings = this.userSettings.bind(this);
    }

    lsUserAuthToken = () => ls.get('userAuthToken');

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
        const { username } = userSelector( this.state );

        return username;
    }

    userSettings() {
        return localUserSelector( this.state ).settings;
    }
}