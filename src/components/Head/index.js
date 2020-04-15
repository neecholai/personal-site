import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundPhoto from '../../assets/personal-photo.jpg';
import Typography from '@material-ui/core/Typography';
import useTyped from '../../hooks/useTyped';

const useStyles = makeStyles((theme) => ({
	root: {
    background: `url(${backgroundPhoto}), linear-gradient(to bottom, #3B5B72 80%, #E4E2E5)`,
    backgroundPosition: "center center, 20% 80%",
    backgroundClip: 'initial',
    backgroundSize: 'cover',
    // background: "linear-gradient(to bottom, #3B5B72 80%, #E4E2E5)",
		width: '100%',
    height: '100vh',
    margin: 'auto',
    padding: 'auto',
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
    alignItems: 'center'
  },
	title: {
		color: 'white',
		padding: 'auto',
	},
	typed: {
		fontSize: '200%',
    color: 'white',
    height: "32px",
	},
}));

const Head = () => {
	const classes = useStyles();
	const typeRef = useRef();

	const options = {
		strings: ['Software Engineer', 'Music Enthusiast', 'Environmental Advocate', 'Basketball Fanatic'],
    typeSpeed: 90,
    backSpeed: 40,
		startDelay: 300,
    cursorChar: '',
    loop: true,
	};

	useTyped(typeRef, options);

	return (
		<div className={classes.root}>
			<Typography variant="h1" className={classes.title}>
				Nicholai Hansen
			</Typography>
			<div className={classes.headerText}>
				<Typography variant="h5" ref={typeRef} className={classes.typed}></Typography>
			</div>
		</div>
	);
};

export default Head;
