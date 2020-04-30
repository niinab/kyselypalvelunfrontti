import React, { useEffect, useState } from 'react';  
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const osoite = 'http://zoomerkysely.herokuapp.com/api/kyselys';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
      background: 'linear-gradient(45deg, #bbdefb 80%, #FFFFFF 30%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px #9e9e9e',
      color: 'black',
      padding: '2px 30px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  otsikko: {
      background: 'linear-gradient(45deg, #bbdefb 40%, #FFFFFF 80%)',
      padding: '0 30px',
      fontSize: 40, 
  }
});

function Kyselyvast(props) {

  const classes = useStyles();

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

const [vastaus, setVastaus] = useState([]);

const inputChanged = (event) => {
  setVastaus(event.target.value);
}
  
  return (
  <div>
    <Typography className={classes.otsikko}>Tervetuloa kyselyyn</Typography>   
      {
        tiedot.map( r => {
          return (
            <Card className={classes.root}>                    
              <CardContent>
                <Typography gutterBottom>                       
                  <div key={ r.kysymysId }>
                    <Typography className={classes.title}> { r.kysymys }  </Typography>                      
                    <form noValidate autoComplete="off"> 
                      <TextField 
                        id="outlined-full-width" 
                        label="Vastaa" 
                        variant="outlined" 
                        fullWidth
                        value={vastaus}
                        onChange={inputChanged}
                        margin="normal"/>

                      <Typography> {vastaus.kysymysId} DEV: Tästä vastaus kohtaan {r.kysymysId} onChange => setVastaus([{r.kysymysId}]) ??</Typography>
                     </form> 
                  </div>
                </Typography> 
              </CardContent>
             </Card>
            );
          })
        }
      <Link href="#">
        <Button variant="contained" color="primary">
            Vastaa
        </Button>
      </Link>
      <Link href="/lista">
        <Button variant="contained" color="secondary">
            Takaisin
        </Button>
      </Link>
    </div>
  );
}

export default Kyselyvast;