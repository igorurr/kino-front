import React from 'react';

import { ContextScaleCheck } from './ProviderScaleCheck';

const showOn = ( childMethod ) => (
    <ContextScaleCheck.Consumer>
        { scaleCheck => childMethod( scaleCheck.resolution ) }
    </ContextScaleCheck.Consumer>
);

export default showOn;