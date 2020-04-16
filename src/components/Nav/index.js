import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    // backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    boxShadow: 'none',
    // '% .navbar-shrink': {
    //   opacity: 0.7,
    // },
  },
  title: {
    textAlign: 'left',
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    padding: theme.spacing(2),
    fontSize: '32px',
  },
  navButton: {
    marginRight: theme.spacing(2),
    fontSize: '24px',
  },
  drawerList: {
    width: 'auto',
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState({ top: false });
  console.log({drawer});

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer({ top: isOpen });
  };

  const drawerList = () => (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Nicholai Hansen', 'About', 'Projects'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={drawer.top} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
        <Typography className={classes.title}>
          <Link to="head" smooth>
            Nicholai Hansen
          </Link>
        </Typography>
        <Typography className={classes.navButton}>
          <Link to="about" smooth>
            About
          </Link>
        </Typography>
        <Typography className={classes.navButton}>
          <Link to="projects" className={classes.navButton} smooth>
            Projects
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
