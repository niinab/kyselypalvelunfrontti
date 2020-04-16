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

// Tämä kai olis toimiva metodi
  function listaaKysymykset(props) {
    // Listaa kaikki kysymykset
  const kysymykset = props.kysymykset;
  const listaaKysymykset = kysymykset.map((kysymys) =>
    <ListItem key={kysymys.toString()}
    value={number} />
  );
  return (
    <ul>{listaaKysymykset}</ul>
  );
}

const vastaukset = [vastaus];
REACTDOM.render(
  <Kysymyslista kysymykset={kysymykset} />,
  document.getElementById('root')
);

export default KyselyvastausMUI;
