import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { SvgIcon } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { GET } from '../utils/request';
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
  const [state, setState] = React.useState({
    nodeBalance: 0
  });
  useEffect(() => {
    async function fetchBalance() {
      const response = await GET(
        '/api/banano/balance?address=ban_1qd5xbauk4erx8hag5einjgdkak31fghxjdy7187qjnhdto4kzpbyntbpubp'
      );
      setState({
        nodeBalance: response && response.long ? Number(response.long) : 0
      });
    }
    fetchBalance();
  }, []);

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
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Banano Phone
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Balance: {state.nodeBalance}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
