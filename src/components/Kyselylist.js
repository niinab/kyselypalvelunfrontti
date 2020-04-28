import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Footer from './Footer';



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
    const [tunnus, setTunnus] = useState("");

    useEffect(() => {
        getKyselyt();
    },[])

    const getKyselyt = async () => {
        try {
            let url = 'http://zoomerkysely.herokuapp.com/api/kyselys';
            const response = await fetch(url);
            const json = await response.json();
            setKyselyt(json);
            console.log(json);

         } catch (error) {
            console.error(error);
        }

    }

    const openKysely = () => {

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
                                    <Typography className={classes.title} gutterBottom> 
                                    
                                        <div key={ r.kyselyId }>
                                            <Typography>Id: { r.kyselyId }</Typography>
                                            <Typography>Kyselyn nimi:  { r.nimi }  </Typography>
                                            <Typography>Kuvaus: {r.kuvaus}</Typography>
                                            <Typography>Päivämäärä:  { r.pvm } </Typography>
                                            <Typography>Tekijä { r.tekija }</Typography>
                                            <Link href={tunnus}><Button variant="contained" color="primary" onClick={() => setTunnus("/nayta/" + r.kyselyId)}>
                                            Vastaa kyselyyn
                                            </Button></Link>

                                            <Typography>DEV: Tästä linkki seuraavalle sivulle ja viedään urlissa /näytä/{r.kyselyId} </Typography>
                                        </div>
                                    
                                    </Typography>
                                        
                                    
                                </CardContent>
                                <Typography>DEV: Testaamista, tunnus: {tunnus}</Typography>
                            </Card>
                            </div>
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
    )
}
