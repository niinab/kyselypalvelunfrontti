import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from "date-fns/locale/fi";

function KyselyvastMUI () {
//tilamuuttujat ja niiden muuttamiskutsu
  const [vastaus, setValues] = useState({
      kuvaus: '',
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues(
      {
        ...vastaus,
        [e.target.name]: e.target.value
      }
    )

   };

   const muutaSuurella = (e) => {
setValues (
  {
    ...vastaus,
    [e.target.name]: e.target.value.toUpperCase()
    }
  )
};


  const lisaaVastaus = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('vastaus1', vastaus.);
    formData.append('vastaus2', vastaus.);
    formData.append('vastaus3', vastaus.);
    formData.append('vastaus4', vastaus);
    formData.append('vastaus5', vastaus.vastaus5);

      axios.post('http://zoomerkysely.herokuapp.com/vastaa', formData)
        .then(response => {
            if (response.status === 200) {
              setValues( {otsikko: '', paiva: '', paikka: '', saa: '', kuva: '', kuvaus: '' []} );
              setViesti('Kyselyn vastaukset on nyt tallennettu');
            } else {
              setViesti('Vastauksen tallennus ei onnistunut');
            }
          })
        }

  const tyhjenna = (e) => {
    e.preventDefault();
    setValues (
      {
        otsikko: '',
        paiva: new Date(),
        paikka: '',
        saa: '',
        kuvaus: '',
        kuva: ''
      }
    )
  }

  return (
    <div>
    <form>
    <TextField label='Otsikko' name='otsikko' id='otsikko' value={ matka.otsikko }
    margin='normal' required fullWidth='true' onChange={ e => muutaSuurella(e) }/>


    <TextField label='Paikka' name='paikka' id='paikka' value={ matka.paikka }
    margin='normal' required fullWidth='true' onChange={ e => muuta(e) }/>

    <TextField label='Sää' name='saa' id='saa' value={ matka.saa }
    margin='normal' required fullWidth='true' onChange={ e => muuta(e) }/>

    <TextField label='Kuvaus' name='kuvaus' id='kuvaus' value={ matka.kuvaus }
    margin='normal' multiline rows='3' fullwidth onChange={ e => muuta(e) }/>


</InputLabel>

<Button variant='contained' color='primary' style={ {marginRight:10} } onClick={e => lisaaMatka()}><CreateIcon />Lisää</Button>
<Button variant='contained' color='secondary' onClick={e => tyhjenna(e) }><ClearIcon /> Tyhjennä</Button>

    </form>
    <Typography>{ viesti }</Typography>
  </div>
  );
}

export default KyselyvastausMUI;
