/** @format */

import React from 'react';
import Project from './Project';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import livestackPhoto from '../../assets/livestack.png';
import joblyPhoto from '../../assets/jobly.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 450,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <GridList cols={1} className={classes.gridList}>
        <Project
          title="LiveStack"
          description="Twitch-like live-streaming app for professionals. Livestack empowers creators like yoga Teachers to remotely monetize their skills with online live-streaming events and classes. Built in React, Express.js, PostgreSQL, and dozens of other libraries and tools."
          image={livestackPhoto}
        ></Project>
        <Project
          title="Jobly"
          description={
            'Indeed clone for job searching and . Livestack empowers creators like ' +
            'yoga Teachers to remotely monetize their skills with online live-streaming events and classes'
          }
          image={joblyPhoto}
        ></Project>
      </GridList>
    </>
  );
};

export default Projects;
