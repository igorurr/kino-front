import React from 'react';

import { ContextScaleCheck } from './ProviderScaleCheck';

const showOnResolution = ( resolutions, child ) => (
    <ContextScaleCheck.Consumer>
        { 
            scaleCheck => 
                typeof resolutions === 'string' && resolutions === scaleCheck ? child :
                resolutions.find( el => el === scaleCheck )                   ? child : null
        }
    </ContextScaleCheck.Consumer>
);

export default showOnResolution;