import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Head from '../components/Head';
import About from '../components/About';
import Projects from '../components/Projects';
import { makeStyles } from '@material-ui/core/styles';
import useScrollPosition from '../hooks/useScrollPosition';

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
	const headRef = useRef();
	
  useScrollPosition(({ currPos }) => {
    Math.abs(currPos.y) > headRef.current.offsetHeight - 50
      ? setTransparent(false)
      : setTransparent(true);
  });
  const [transparent, setTransparent] = useState(true);

  return (
    <div className={classes.home}>
      <Nav transparent={transparent} />
      <Head headRef={headRef} />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
