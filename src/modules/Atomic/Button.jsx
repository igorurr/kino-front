import React from 'react';

import { 
    Button,
    withStyles
} from '@material-ui/core';

export default ( { 
    text,
    ...props
} ) => {
    return (
        <Button {...props}>
          {text}
        </Button>
    )
};