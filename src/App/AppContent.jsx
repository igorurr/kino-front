import React, { Component } from 'react';

import { withKino } from '../envs/Kino';

class AppContent extends Component {
    /*constructor( props ) {
        super( props );


    }*/

    render() {
      return this.props.children;
    }

    componentDidMount() {
        this.props.kino.actions.getUser();
    }
}

export default withKino(AppContent);