import React from 'react';

const kino = {

};

export const widthKino = ( Component ) => ( props ) => (
  <Component {...props} kino={kino} />
)