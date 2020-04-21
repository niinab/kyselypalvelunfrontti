import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

=======
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Kyselyvast from './Kyselyvast';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
>>>>>>> f4325ead532ed7dba49fca61565a3233357461e4

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
    otsikko: {
        fontSize: 40, 
    }
  });



export default function Kyselylist() {

    const classes = useStyles();

    const [kyselyt, setKyselyt] = useState([]);
    const [id, setId] = useState('');


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

    const vastaa = (e) => {
        e.preventDefault();
        const kyselyTunnus = lisaaTunnus();

        function lisaaTunnus () {
            setId(e.target.value);
        }


    }

    return(
        <div>
            {
                    kyselyt.map( r => {
                        return (
                            <div>
                            <Typography class={classes.otsikko}>Kyselyt </Typography>
                            <Card className={classes.root}>
                                
                                <CardContent>
<<<<<<< HEAD
                                    <Typography className={classes.title} gutterBottom> <div key={ r.id }>
                                    <Typography>Id: { r.kyselyId }</Typography>
                                        <Typography>Kyselyn nimi:  { r.nimi }  </Typography>
                                        <Typography>Päivämäärä:  { r.pvm } </Typography>
                                        <Typography>Tekijä { r.tekija }</Typography>
                                        </div>
                                    </Typography>
                                        <Link href="/nayta/${r.kyselyId}"><Button variant="contained" color="primary">
                                        Vastaa kyselyyn
                                        </Button></Link>
                                    
                                </CardContent>
=======
                                    <Typography className={classes.title} gutterBottom>
                            <div key={ r.id}>
                                { r.nimi } { r.pvm } { r.tekija }
                            </div>
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="small">Vastaa</Button>
                            </CardActions>
>>>>>>> f4325ead532ed7dba49fca61565a3233357461e4
                            </Card>
                            </div>
                        );
                    })
                }
        </div>
    )
}
