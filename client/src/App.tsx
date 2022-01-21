import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const userId = '7b79dbaa3e0341aebe09bd68be622184';
// const amount = 1500;
// const dateRequest = "2021-06-25";
// const toConvert = "PEN";

function App() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [values, setValues] = useState({
    amount: '',
    dateRequest: '',
    toConvert: '',
  });
  const getExchangevalue = () => {
    axios
      .post(
        "http://localhost:5000/conversions?from=USD&to=" + values.toConvert + "&amount=" + values.amount + "&dateRequest=" + values.dateRequest,
      )
      .then((response: any) => {
        console.log(response); //Pendiente manejar el error
      });
  };
  const handleChange = (prop: string) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (
      values.amount !== '' &&
      values.dateRequest !== '' &&
      values.toConvert !== ''
    ) {
      setInputEmpty(false);
    }
  }, [inputEmpty, values.amount, values.dateRequest, values.toConvert]);

  return (
    <>
      <div className="inputs-container">
        <input
          placeholder="monto en USD"
          value={values.amount}
          onChange={handleChange('amount')}
        ></input>
        <input
          placeholder="fecha"
          value={values.dateRequest}
          onChange={handleChange('dateRequest')}
        ></input>
        <input
          placeholder="moneda destino" 
          value={values.toConvert}
          onChange={handleChange('toConvert')}
        ></input>
      </div>
      <div>
        Convertidor de Monedas{' '}
        <button onClick={getExchangevalue} disabled={inputEmpty ? true : false}>Enviar</button>
      </div>
    </>
  );
}

export default App;
