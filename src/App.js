import React from 'react';
import AppBaari from './components/AppBaari';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {amber, lightBlue, brown} from '@material-ui/core/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Kyselylist from './components/Kyselylist';
//import KyselyvastausMUI from './components/KyselyvastausMUI';
import Kyselyvast from './components/Kyselyvast';
import Aloitus from './components/Aloitus';



const theme = createMuiTheme({
  palette: { primary: {main: lightBlue[500], contrastText: '#FFFFFF'},
  secondary: {main: amber[300], contrastText: lightBlue[50]},
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
