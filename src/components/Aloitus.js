import React from 'react';
import Kysymysmerkki from '../kysymysmerkki.jpg';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Footer from './Footer';

function Aloitus() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tervetuloa!</h1>
        <Typography>
        <Link href="/lista">Kyselylista</Link>
        </Typography>
          <img src={Kysymysmerkki} width={1400} height={900} mode='fit' alt=""></img>
          
        
        
      </header>

      <Footer />
    </div>
  );
}

export default Aloitus;