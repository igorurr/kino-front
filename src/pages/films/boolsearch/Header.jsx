import React, { Component } from 'react';
import { FormControl, TextField, InputAdornment, IconButton, Fab, Menu, MenuItem } from "@material-ui/core";
import { Search, ExpandMore } from '@material-ui/icons';

import "./styles.scss";

export default ( {} ) => (
    <div className='search-header'>
        <div className='search-header-header'>
            <h2>Булево-поиск</h2>
            <h5>Введите "танос && марвел"</h5>
        </div>
        <div className='form-search'>
            <Fab
                className='last-queries-btn'
                onClick={()=>console.log('hui2')}
                size='small'
            >
                <ExpandMore />
            </Fab>
            <Menu
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
            <TextField
                className="search-field"
                variant="outlined"
                type='text'
                label="Search text"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={()=>console.log('hui')}
                                aria-label="Click then search"
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    </div>
);