import React from 'react';

import cn from 'classnames';

import { 
    Modal,
    withStyles
} from '@material-ui/core';

const styles = theme => ({
    modalWindow: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        margin: 'auto',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 'fit-content'
    },
});

export default withStyles(styles)( ( { 
    className, classes,
    children, open, ...props
} ) => {
    return (
        <Modal
            {...props}
            open={open || false}
        >
            <article className={cn(classes.modalWindow,className)}>
                {children}
            </article>
        </Modal>
    )
} );