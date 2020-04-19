/** @format */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  description: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 'inherit',
  },
  image: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    color: theme.palette.primary.main,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(10),
  },
  title: {
    alignItems: 'flex-start',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  body: {},
}));

const Project = ({ title, description, image, isImgFirst, link }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const classes = useStyles();

  const imgJSX = (
    <Grid item sm={12} md={6} className={classes.image}>
      <img src={image} alt="project" style={{ width: '100%', height: '100%' }} />
    </Grid>
  );

  const textJSX = (
    <Grid item sm={12} md={6} className={classes.text}>
      <Typography
        component={Link}
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        variant="h5"
        className={classes.title}
      >
        <b>{title}</b>
      </Typography>
      <Typography variant="body1" className={classes.body}>
        {description}
      </Typography>
    </Grid>
  );

  return isImgFirst && !isMobile ? (
    <Grid container item xs={10} sm={8} md={11} lg={8}>
      {imgJSX}
      {textJSX}
    </Grid>
  ) : (
    <Grid container item xs={10} sm={8} md={11} lg={8}>
      {textJSX}
      {imgJSX}
    </Grid>
  );
};

export default Project;
