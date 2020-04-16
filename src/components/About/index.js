import React from 'react';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: ({ isMobile }) => ({
    // background: 'linear-gradient(to bottom, #e66465 80%, #9198e5)',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: isMobile ? theme.spacing(3, 5) : theme.spacing(3, 20),
  }),
  title: { 
    padding: theme.spacing(1, 0),
  },
}));

const About = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const classes = useStyles({ isMobile });

  return (
    <div id="about" className={classes.root}>
      <Typography variant="h3" className={classes.title}>About Me</Typography>
      <Typography variant="h6">
        I’m a Software Engineer based out of San Francisco with a passion for discovering
        technologies and building applications. After graduating from UCLA in 2015, I worked in
        project management and sales consulting in sustainability. I love continuously learning, so
        I tried my hand at coding in the Spring of 2019. It immediately resulted in an insatiable
        thirst for more. I started building web sites, and enrolled in an intensive program at Rithm
        School to jump-start my software engineering career. I haven’t looked back since.
      </Typography>
    </div>
  );
};

export default About;
