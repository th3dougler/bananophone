import * as React from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router';
import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeOptions,
  ThemeProvider
} from '@material-ui/core';
import MainAppBar from './components/MainAppBar';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#009610',
      contrastText: '#ffdd00'
    },
    secondary: {
      main: '#FFDD00'
    },
    success: {
      main: '#4caf50',
      dark: '#7a3536'
    },
    info: {
      main: '#6bb3a3'
    }
  }
};
const theme = createTheme(themeOptions);
let Home = (props: RouteComponentProps) => <div>Home</div>;
let Dash = (props: RouteComponentProps) => <div>Dash</div>;
export const App = () => (
  <ThemeProvider theme={theme}>
    <MainAppBar />
    <Grid container>
      <Grid item xs={12} component={Box} pt={1}>
        <Container maxWidth="sm">
          <Router>
            <Home path="/" />
            <Dash path="dashboard" />
          </Router>
        </Container>
      </Grid>
    </Grid>
  </ThemeProvider>
);
