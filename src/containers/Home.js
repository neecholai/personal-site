import React from 'react';
import About from '../components/About';
import Head from '../components/Head';
import Projects from '../components/Projects';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	home: {
		textAlign: 'center',
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.home}>
			<Head />
			<About />
			<Projects />
		</div>
	);
};

export default Home;
