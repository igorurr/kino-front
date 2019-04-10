import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';

import { Card, CardContent, Button, Typography, CardActions, CardMedia } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import "./styles.scss";

const styles = {
    card: {
        minWidth: 250,
        maxWidth: 350,
        width: 250,
        flexGrow: 1,
        margin: 5
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
  };

const Film = ({ classes, descr }) => (
    <Card className={cn(classes.card,'film-card')}>
        <CardMedia
            className={classes.media}
            image="https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/37087459-1034012.jpg"
            title="Paella dish"
        />
      <CardContent>
        <Typography variant="h5" component="h2">
            название фильма
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            с Джоном Уолсоном
        </Typography>
        <Typography component="p">
          {descr}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Смотреть бесплатно</Button>
      </CardActions>
    </Card>
);



export default withStyles(styles)(Film);