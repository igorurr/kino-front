import React, { Component } from 'react';
import { Link } from "../../helpers/Router/";
import cn from 'classnames';

import { 
  Card, 
  CardContent, 
  Button, 
  Typography,
  CardActions, 
  CardActionArea,
  CardMedia, 
  Grid,
  IconButton
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

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
    iconSmall: {
      fontSize: 15,
    },
    likesDislikes: {
      flexGrow: 2,
      display: 'flex'
    },
    likesDislikesValue: {
      margin: '0 10px 0 5px'
    }
  };

const Film = ({ 
  classes, 
  className,
  film: { 
    id,
    name,
    actors,
    description,
    img
  }
}) => (
  <Card className={cn(className,classes.card,'film-card')}>
    <CardActionArea>
      <CardMedia
          className={classes.media}
          image={img}
          title={name}
          alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {actors}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Grid 
        justify="space-between" 
        alignItems='center'
        container
      >
        <nav className={classes.likesDislikes}>
          <p>
            <IconButton className={classes.iconSmall}>
              <ThumbUp fontSize='small' />
            </IconButton>
            <span className={classes.likesDislikesValue}>5</span>
          </p>
          <p>
            <IconButton className={classes.iconSmall}>
              <ThumbDown fontSize='small' />
            </IconButton>
            <span className={classes.likesDislikesValue}>5</span>
          </p>
        </nav>
        <Link route='index'>
          <Button size="small">Смотреть</Button>
        </Link>
      </Grid>
    </CardActions>
  </Card>
);



export default withStyles(styles)(Film);