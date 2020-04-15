import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	description: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: "inherit"
	},
	title: {
	},
	body: {
	},
}));

const Project = ({ title, description, image }) => {
	const classes = useStyles();

	return (
    <>
		<Grid item xs={12} sm={6}>
			<Typography variant="h5" className={classes.title}>
				{title}
			</Typography>
			<Typography variant="body1" className={classes.body}>
				{description}
			</Typography>
		</Grid>
		<Grid item xs={12} sm={5}>
      <img src={image} alt="project" style={{width: "100%", height: "auto"}}></img>
		</Grid>
    </>
	);
};

export default Project;
