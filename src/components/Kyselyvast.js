import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';

const osoite = 'http://zoomerkysely.herokuapp.com/api/kyselys';

axios.get(osoite)
.then(response => console.log(response))
.catch(error => console.log(error));

const useStyles = makeStyles({
  root: {
    minWidth: 275,
      background: 'linear-gradient(160deg, #bbdefb 30%, #FFFFFF 80%)',
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

// Funktio alkaa tästä

function Kyselyvast() {

  const classes = useStyles();

  let today = new Date(),
  date =  today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

  // Älä muokkaa, tänne tulee kysymyslista
  const [tiedot, setTiedot] = useState([]);

  // Käyttäjän nimi
  const [nimi, setNimi] = useState('');
  // Palvelimelle vastaus objekti
  const [vastaa, setVastaa] = useState([{vastaus: '', vastaaja: '', kysymysId: ''}]);
  
// Palvelimalle vastaus taulu
  //const [palvelimelle, setPalvelimelle] = useState([]);

  // URLista haetaan id
    let {id} = useParams();

  const fechUrl = async () => {
      try {
        const response = await fetch(osoite);
        const json = await response.json();
        setTiedot(json[0].kysymykset);
        console.log(json);

    } catch (error) {
      toast.error("Virhe latauksessa", {
        position: toast.POSITION.BOTTOM_LEFT
      });
        console.log(error);
    }

}

useEffect(() => {
  fechUrl();
}, [])

const handleSave = () => {
  console.log(nimi)
  console.log(vastaa)
  console.log(JSON.stringify(vastaa));
  toast.success("Tallennettu", {
    position: toast.POSITION.BOTTOM_LEFT
  });
}


const inputChanged = (event) => {
  setVastaa([{
    ...vastaa,
    kysymysId: event.target.name,
    vastaus: event.target.value
  }]);
}

  return (
  <div>
    <Typography className={classes.otsikko}>Tervetuloa kyselyyn, vastaus päivämäärä on {date} KyselyId: {id} </Typography>
    <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                    <Typography className={classes.title}> Anna nimesi:</Typography>
                    <form noValidate autoComplete="off">
                      <TextField
                        id="outlined-full-width"
                        label="Nimi"
                        variant="outlined"
                        fullWidth
                        onChange={(nimi) => setNimi(nimi)}
                        margin="normal"
                        type="text"
                        name="vastaaja"/>
                     </form>
                </Typography>
              </CardContent>
             </Card>

      {
        tiedot.map( r => {
          return (
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                  <div key={ r.kysymysId }>
                    <Typography className={classes.title}> { r.kysymysTeksti }  KysymysId: { r.kysymysId }</Typography>
                    <form noValidate autoComplete="off">
                      <TextField
                        id="outlined-full-width"
                        label="Vastaa"
                        variant="outlined"
                        fullWidth
                        placeholder=""
                        name={r.kysymysId}
                        onChange={inputChanged}
                        margin="normal"
                        type="text"
                        />
                     </form>
                  </div>
                </Typography>
              </CardContent>
             </Card>
            );
          })
        }
        <Button variant="contained" color="primary" onClick={handleSave}>
            Vastaa
        </Button>

        <Button variant="contained" color="secondary" component={ Link } color="secondary" to={'/lista/'}>
            Takaisin
        </Button>
      
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default Kyselyvast;
