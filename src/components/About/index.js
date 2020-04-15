import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const About = () => {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<Box bgcolor="primary.main" height="400px" display="flex" flexDirection="column" justifyContent="center" py={6} px={isMobile ? 5 : 20}>
			<Typography variant="h3">About Me</Typography>
			<Typography variant="h6">
				I’m a Software Engineer based out of San Francisco with a passion for discovering technologies and
				building applications. After graduating from UCLA in 2015, I worked in project management and sales
				consulting in sustainability. I love continuously learning, so I tried my hand at coding in the Spring
				of 2019. It immediately resulted in an insatiable thirst for more. I started building web sites, and
				enrolled in an intensive program at Rithm School to jump-start my software engineering career. I haven’t
				looked back since.
			</Typography>
		</Box>
	);
};

export default About;
