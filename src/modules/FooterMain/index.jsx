import React, { Component } from 'react';
import { FormControl, TextField, Button, Select, Input, MenuItem } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green,red} from '@material-ui/core/colors/';
import { Menu } from "@material-ui/icons";

import "./styles.scss";

const MenuProps = {
    PaperProps: {
        style: {
            width: 250,
        },
    },
};

const footer = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
        primary: green,
        accent: red,
        type: 'light',
    }
  });

const typesSearch = [
    'Булево поиск',
    '+ Цитатный поиск',
    '+ TF-IDF',
    '+ Зонный поиск'
];

export default class extends Component {
    state = {
        name: "",
    };
    
    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render(){
        return (
            <div>
                контент футера
                <div className='footer-search'>
                    <MuiThemeProvider theme={footer}>
                        <FormControl className='text-search'>
                            <TextField
                                placeholder='Search text'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <FormControl className='type-search'>
                            <Select
                                value={this.state.name}
                                onChange={this.handleChange}
                                input={<Input />}
                                MenuProps={MenuProps}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Type
                                </MenuItem>
                                {typesSearch.map(name => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Button
                                variant='outlined'
                                color='#0c0'
                            >
                                Куссс
                            </Button>
                        </FormControl>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
};