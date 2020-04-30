import React from 'react';
import Kysymysmerkki from '../kysymysmerkki.jpg';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Footer from './Footer';
import '../tyyli.css';

function Aloitus() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tervetuloa!</h1>
        <Typography>
        <Link href="/lista">
          <Button variant="contained" class="btn" color="primary">
              Kyselylista
          </Button>
        </Link>
        </Typography>
          <img src={Kysymysmerkki} style={ {borderRadius:75} } mode='fit' alt=""></img>
        </header>
        <Footer />
      </div>
    );
  }

  export default Aloitus;
