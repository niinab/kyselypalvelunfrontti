import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const url = 'http://zoomerkysely.herokuapp.com';


function KyselyVastaus(props) {
    const [tunnus, setTunnus] = useState("");

    console.log(props.kysymykset);

        return (
            <div>
                <Grid container spacing={4}>
                    {props.kysymykset.map(kysymys => {
                        return (
                            <Grid item key={ kysymys.kysymysId} >
                                                                  
                                    <CardContent>
                                        <Typography>{ kysymys.kysymysYksilot[0].kysymysTeksti} </Typography>                                                                      
                                   
                                    </CardContent>
                                    
                                
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }


export default KyselyVastaus;