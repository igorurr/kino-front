import React from 'react';
import { uniqueId } from 'lodash';

import { 
    FormControl, Input, InputLabel,
    withStyles
} from '@material-ui/core';

export default ( { 
    label,
    ...props
} ) => {
    const formId = uniqueId('atomic-');
    return (
        <FormControl>
            <InputLabel htmlFor={formId}>{label}</InputLabel>
            <Input {...props} id={formId} />
        </FormControl>
    )
};