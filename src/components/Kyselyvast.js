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

  // URLista haetaan id
  let {id} = useParams();

  const fechUrl = async () => {
      try {
        const response = await fetch(osoite);
        const json = await response.json();
        
        for (let i =0; i < json.length; i++) {
          if (json[i].kyselyId == id) {
            setTiedot(json[i].kysymykset);
          }
        }

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
  console.log(vastaa)
  console.log(JSON.stringify(vastaa));
  toast.success("Tallennettu", {
    position: toast.POSITION.BOTTOM_LEFT
  });
}


  const [vastaa, setVastaa] = useState({});
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setVastaa(vastaa => ({...vastaa,  [event.target.name]: event.target.value}));
  }


  return (
  <div>
    <Typography className={classes.otsikko}>Tervetuloa kyselyyn, vastaus päivämäärä on {date}</Typography>
    <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                    <Typography className={classes.title}> Anna nimesi:</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <TextField
                        id="outlined-full-width"
                        label="Nimi"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
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
                
                  <div key={ r.kysymysId }>
                    <Typography className={classes.title}> { r.kysymysTeksti }</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <TextField
                        id="outlined-full-width"
                        label="Vastaa"
                        variant="outlined"
                        fullWidth
                        placeholder=""
                        name={r.kysymysId}
                        onChange={handleInputChange}
                        margin="normal"
                        type="text"
                        />
                     </form>
                  </div>
                
              </CardContent>
             </Card>
            );
          })
        }
        <Button variant="contained" color="primary" type="submit" onClick={handleSave}>
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
