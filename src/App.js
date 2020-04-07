import React from 'react'
import './App.css';
import Kyselylist from './components/Kyselylist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Kyselyt
          </Typography>
        </Toolbar>
        </AppBar>    
        <Kyselylist/>
        </div>
  );
}

export default App;
