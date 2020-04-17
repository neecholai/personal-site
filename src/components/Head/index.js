import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundPhoto from '../../assets/personal-photo.jpg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useTyped from '../../hooks/useTyped';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';

library.add(faEnvelope, fab);

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(45, 87, 109, 0.2) 80%, rgba(233, 231, 234, 1)), url(${backgroundPhoto})`,
    backgroundClip: 'initial',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    '& .typed-cursor': {
      fontSize: '2rem',
      color: 'white',
    },
  },
  headerText: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typed: {
    fontSize: '200%',
    color: theme.palette.text.primary,
    height: '32px',
  },
  socials: {
    margin: theme.spacing(2),
  },
  avatar: {
    fontSize: 20,
    width: 30,
    height: 30,
    margin: theme.spacing(0.7),
    display: 'inline-flex',

    '&:hover': {
      opacity: '0.5',
      transform: 'scale(1.2)',
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    width: '100%',
    height: '100%',
  },
  faGithub: {
    background: '#23282E',
  },
  faFacebook: {
    background: '#4266B2',
  },
  faInstagram: {
    background: 'linear-gradient(to bottom left, #5C6CB3, #DB4865,  #F6B25C)',
  },
  faLinkedin: {
    background: '#0371AE',
  },
  faEnvelope: {
    background: '#D5493C',
  },
}));

const Head = ({ headRef }) => {
  const classes = useStyles();
  const typeRef = useRef();

  const options = {
    strings: [
      'Software Engineer',
      'Music Enthusiast',
      'Environmental Advocate',
      'Basketball Fanatic',
    ],
    typeSpeed: 90,
    backSpeed: 40,
    startDelay: 300,
    cursorChar: '',
    loop: true,
  };

  useTyped(typeRef, options);

  return (
    <div id="head" ref={headRef} className={classes.root}>
      <Typography variant="h1" color="textPrimary">
        Nicholai Hansen
      </Typography>
      <div className={classes.headerText}>
        <Typography variant="h5" ref={typeRef} className={classes.typed}></Typography>
      </div>
      <div className={classes.socials}>
        <Avatar className={clsx(classes.avatar, classes.faGithub)}>
          <a
            href="https://github.com/neecholai"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <FontAwesomeIcon className={classes.fa} icon={faGithub} />
          </a>
        </Avatar>
        <Avatar className={clsx(classes.avatar, classes.faLinkedin)}>
          <a
            href="https://www.linkedin.com/in/nicholai-hansen-92405a96/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <FontAwesomeIcon className={classes.fa} icon={faLinkedin} />
          </a>
        </Avatar>
        <Avatar className={clsx(classes.avatar, classes.faEnvelope)}>
          <a
            href="mailto:nicholaihansen1993@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <FontAwesomeIcon className={classes.fa} icon={faEnvelope} />
          </a>
        </Avatar>
        <Avatar className={clsx(classes.avatar, classes.faFacebook)}>
          <a
            href="https://www.facebook.com/nicholai.h"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <FontAwesomeIcon className={classes.fa} icon={faFacebook} />
          </a>
        </Avatar>
        <Avatar className={clsx(classes.avatar, classes.faInstagram)}>
          <a
            href="https://www.instagram.com/neecholai/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <FontAwesomeIcon className={classes.fa} icon={faInstagram} />
          </a>
        </Avatar>
      </div>
    </div>
  );
};

export default Head;
