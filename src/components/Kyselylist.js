import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
                            <div key={ r.nimi }>
                                { r.nimi } { r.pvm } { r.tekija }
                            </div>
                                    </Typography>
                            </CardContent>
                            </Card>
                           
                        );
                    })
                }
        </div>
    )
}
