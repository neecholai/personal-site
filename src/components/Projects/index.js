import React from 'react';
import Project from './Project';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import livestackPhoto from '../../assets/livestack.png';
import joblyPhoto from '../../assets/jobly.png';
import warblerPhoto from '../../assets/warbler.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'inherit',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },
  title: {
    padding: theme.spacing(2, 0),
  },
  body: {},
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div id="projects" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Projects
      </Typography>
      <Grid container alignItems="center" direction="row" justify="center">
        <Project
          title="LiveStack"
          description="Twitch-like live-streaming app for professionals. Livestack empowers creators like yoga teachers to remotely monetize their skills with online live-streaming events and classes. Built in React, Express.js, PostgreSQL, and dozens of other libraries and tools."
          image={livestackPhoto}
          isImgFirst
        ></Project>
        <Project
          title="Warbler"
          description="Twitter clone. Warbler allows users share bite-sized thoughts and follow others. to follow each other, and post and like 'warbles.' Users can post and like other user's 'warbles'. Users can find other users Built in Javascript, Flask, and SQL."
          image={warblerPhoto}
        ></Project>
        <Project
          title="Jobly"
          description="Indeed clone to connect companies with candidates. Companies can post job openings and candidates can login and apply. Built in React, Express.js, PostgreSQL, and React-Bootstrap."
          image={joblyPhoto}
          isImgFirst
        ></Project>
      </Grid>
    </div>
  );
};

export default Projects;
