import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { SvgIcon } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import BananaIcon from '../public/bananaicon.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MainAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <SvgIcon component={BananaIcon} />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Banano Phone
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
