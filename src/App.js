import React from 'react';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {  deepPurple, lightBlue, brown} from '@material-ui/core/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kyselylist from './components/Kyselylist';
//import KyselyvastausMUI from './components/KyselyvastausMUI';
import Kyselyvast from './components/Kyselyvast';
import Aloitus from './components/Aloitus';
import './tyyli.css';



const theme = createMuiTheme({
  palette: { primary: {main: lightBlue[400], contrastText: '#FFFFFF'},
  secondary: {main: deepPurple[200], contrastText: lightBlue[900]},
  text: {primary: brown[800], secondary: brown[50 ] },
  },
  typography: {fontFamily: ['Poppins', 'Sans Serif']}
});

function App() {

  return (
    <BrowserRouter>
    <MuiThemeProvider theme= { theme }>
        <div>
        <CssBaseline />
          <Switch>
              <Route path='/' exact component={ Aloitus } />
              <Route path='/lista' component={ Kyselylist } />
              <Route path='/nayta/:id' component={ Kyselyvast } />

          </Switch>
        </div>
    </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
