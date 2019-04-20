
export class Actions {
    api = null;
    data = null;
    dispatch = null;

    constructor( _data, _api ) {
        this.data = _data;
        this.api = _api;
    }

    updateRedux( _dispatch ) {
        this.dispatch = _dispatch;
    }
}