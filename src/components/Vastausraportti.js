import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const osoite = 'http://localhost:8080/api/vastaus/Aku%20Ankka' ;

const useStyles = makeStyles({
    root: {
      minWidth: 275,
        background: 'linear-gradient(45deg, #bbdefb 80%, #FFFFFF 30%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #9e9e9e',
        color: 'black',
        padding: '0 30px',
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
function VastausRaportti () {

const classes = useStyles();

// Älä muokkaa, tänne tulee kysymyslista
const [tiedot, setTiedot] = useState([]);

//Hakee vastauksen ja kysymykset
const fechUrl = async () => {
  try {;
      const response = await fetch(osoite);
      const json = await response.json();
      setTiedot(json);
      console.log(json);
      console.log(tiedot);

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


return(
  <div>
  <Typography className={classes.title}> Vastaajan x vastaus kyselyyn <Link href="/nayta/4">Haaga-Helian suuri liikuntakysely</Link> </Typography>
  <div>
    {  tiedot.map( r => {
        return (
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography gutterBottom>
                        <div key={ r.vastausId }>
                          <form>
                            <Typography className={classes.pos}> { r.kysymys.kysymysTeksti }</Typography>
                            <Typography className={classes.root}> { r.vastaus }</Typography>
                          </form>
                        </div>
                      </Typography>
                    </CardContent>
                  </Card>
                  );
                })
              }

              <Link href="/">
                  <Button variant="contained" color="secondary">
                  Takaisin
                  </Button>
              </Link>
            <Footer />
          </div>
          </div>
          );
        }

export default VastausRaportti;
