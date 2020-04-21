import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Kyselyvast from './Kyselyvast';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


export default function Kyselylist() {

    const classes = useStyles();

    const [kyselyt, setKyselyt] = useState([]);


    useEffect(() => {
        getKyselyt();
    },[])

    const getKyselyt = async () => {
        try {
            let url = 'http://zoomerkysely.herokuapp.com/kyselys';
            const response = await fetch(url);
            const json = await response.json();
            setKyselyt(json);
            console.log(json);

         } catch (error) {
            console.error(error);
        }

    }


    return(
        <div>
            {
                    kyselyt.map( r => {
                        return (
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom>
                            <div key={ r.id}>
                                { r.nimi } { r.pvm } { r.tekija }
                            </div>
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="small">Vastaa</Button>
                            </CardActions>
                            </Card>
                           
                        );
                    })
                }
        </div>
    )
}
