import React from 'react';
import Nav from '../components/Nav';
import Head from '../components/Head';
import About from '../components/About';
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
			<Nav />
			<Head />
			<About />
			<Projects />
		</div>
	);
};

export default Home;
