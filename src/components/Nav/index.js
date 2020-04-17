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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: ({ transparent }) => ({
    transition: 'background 0.7s ease',
    background: transparent ? 'transparent' : theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    boxShadow: 'none',
    padding: theme.spacing(1),
  }),
  hide: {
    display: 'none',
  },
  title: {
    textAlign: 'left',
    marginLeft: theme.spacing(3),
    flexGrow: 1,
    fontSize: '32px',
  },
  navButton: {
    marginRight: theme.spacing(3),
    fontSize: '24px',
  },
  drawer: {
    width: '250',
  },
  menuIcon: {
    height: '40px',
    width: '40px',
  },
}));

const Nav = ({transparent}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const classes = useStyles({transparent});
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const drawerList = (
    <List>
      {[
        { text: 'Nicholai Hansen', scroll: 'head' },
        { text: 'About', scroll: 'about' },
        { text: 'Projects', scroll: 'projects' },
      ].map((item) => (
        <ListItem button key={item.text}>
          <Link to={item.scroll} smooth onClick={toggleDrawer(false)}>
            <ListItemText primary={item.text} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleDrawer(true)}
            color="inherit"
            aria-label="menu"
            className={clsx(classes.menuButton, open && classes.hide, !isMobile && classes.hide)}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>

          <Typography
            component={Link}
            to="head"
            smooth
            className={clsx(classes.title, isMobile && classes.hide)}
          >
            Nicholai Hansen
          </Typography>
          <Typography
            component={Link}
            to="about"
            smooth
            className={clsx(classes.navButton, isMobile && classes.hide)}
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="projects"
            smooth
            className={clsx(classes.navButton, isMobile && classes.hide)}
          >
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        className={clsx(classes.drawer)}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Nav;
