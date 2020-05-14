import React, {useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import KyselyVastaus from './KyselyVastaus';
import { useParams } from 'react-router-dom';

const url = 'http://zoomerkysely.herokuapp.com';
const kyselyId = 0;

function HaeLista () {
    const [kysymykset, setKysymys] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan tietoja');

    const haeKysymykset = async () => {
        try {
            const response = await fetch(url+ '/api/kyselys');
            const json = await response.json();
            
            setKysymys(json[kyselyId].kysymykset);
            setVirhe('');

        } catch (error) {
            setKysymys([]);
            setVirhe('Tietojen haku ei onnistu');
        }
    }
    

    useEffect(() => {
        haeKysymykset();
    }, [])

    if (virhe.length > 0) {
        return ( <Typography> {virhe} </Typography>)
    }

    return (
        <KyselyVastaus kysymykset={ kysymykset }/>
    )

}

export default HaeLista;