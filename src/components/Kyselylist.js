import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';



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

    return(
        <div>
            {
                    kyselyt.map( r => {
                        return (
                            <div>
                            <Typography class={classes.otsikko}>Kyselyt </Typography>
                            <Card className={classes.root}>
                                
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom> <div key={ r.id }>
                                    <Typography>Id: { r.kyselyId }</Typography>
                                        <Typography>Kyselyn nimi:  { r.nimi }  </Typography>
                                        <Typography>Päivämäärä:  { r.pvm } </Typography>
                                        <Typography>Tekijä { r.tekija }</Typography>
                                        </div>
                                    </Typography>
                                        <Link href="/nayta/1"><Button variant="contained" color="primary">
                                        Vastaa kyselyyn
                                        </Button></Link>
                                    
                                </CardContent>

                            </Card>
                            </div>
                        );
                    })
                }
        </div>
    )
}
