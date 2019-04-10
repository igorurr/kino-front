import React from 'react';

import { 
    List as MUList, ListItem as MUListItem
} from '@material-ui/core';

export const ListItem = ( {
    children, ...props
} ) => {
    return (
        <MUListItem {...props}>
          {children}
        </MUListItem>
    )
};

const wrapChildrensWithListItem = ( childrens ) => 
    childrens.map( children => {
        const propsListItem = {};

        if( children.props.listItem )
            propsListItem = { ...propsListItem, ...children.props.listItem }

        if( children.props.key )
            propsListItem = { ...propsListItem, key: children.props.key }

        return (
            <ListItem {...propsListItem}>{children}</ListItem>
        )
    } )

export const List = ( {
    children, ...props
} ) => {
    return (
        <MUList {...props}>
          {wrapChildrensWithListItem(children)}
        </MUList>
    )
};