import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Footer from './Footer';

const osoite = 'http://zoomerkysely.herokuapp.com/api/kyselys';

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

//Hakee kysymykset
const fechUrl = async () => {
  try {;
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


return(

  {  tiedot.map( r => {
      return (
        <div key={ r.kysymysId }>
          <form>
          <Typography className={classes.root}> { r.kysymysYksilot[0].kysymysTeksti }  </Typography>
          </form>
        </div>
          );
        })
      }
    );

  }
export default VastausRaportti;
