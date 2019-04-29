import React, { Component } from 'react';
import cn from 'classnames';

import { LinearProgress } from '@material-ui/core';

import './styles.scss';

export default ( { isLoading, children } ) => (
    <article className={cn('loading-screen', isLoading ? 'is-loading' : '' )}>
        <main className='loading-screen-background'>
            <LinearProgress className='loading-screen-background-header' />
        </main>
        {children}
    </article>
)