import React from 'react';
import Kysymysmerkki from '../kysymysmerkki.jpg';

function Aloitus() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tervetuloa!</h1>
          <img src={Kysymysmerkki} width={1400} height={900} mode='fit'></img>
          
        
        
      </header>
    </div>
  );
}

export default Aloitus;