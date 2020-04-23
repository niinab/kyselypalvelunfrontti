import React, { useEffect, useState } from 'react';  
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const osoite = 'http://zoomerkysely.herokuapp.com/api/kyselys';

function Kyselyvast(props) {

  const [tiedot, setTiedot] = useState([]);

  const fechUrl = async () => {
    try {;
        const response = await fetch(osoite);
        const json = await response.json();
        setTiedot(json[0].kysymykset);
        console.log(json);

    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
    fechUrl();
}, [])
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tervetuloa kyselyyn</h1>      
      </header>
      {
                    tiedot.map( r => {
                        return (
                            <div>
                            <Typography >Kysymykset</Typography>
                            <Card>
                                
                                <CardContent>
                                    <Typography gutterBottom> <div key={ r.id }>
                                        <Typography>Kyselyn nimi:  { r.kysymys }  </Typography>
                                        </div>
                                    </Typography>                                  
                                </CardContent>
                            </Card>
                            </div>
                        );
                    })
                }


    </div>
  );
}

export default Kyselyvast;