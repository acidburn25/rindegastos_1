import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [values, setValues] = useState({
    amount: '',
    dateRequest: '',
    toConvert: '',
  });
  const [data, setData] = useState("");
  const getExchangevalue = () => {
    axios
      .get(
        "http://localhost:5000/conversions?from=USD&to=" + values.toConvert + "&amount=" + values.amount + "&dateRequest=" + values.dateRequest,
      )
      .then((response) => {
        setData(response.data); //Pendiente manejar el error
      });
  };
  const handleChange = (prop) => (event) => {
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
      <div className="container">
        <div className="inputs-container">
          <input
            placeholder="Monto en USD"
            value={values.amount}
            onChange={handleChange('amount')}
          ></input>
          <input
            placeholder="Fecha solicitada"
            value={values.dateRequest}
            onChange={handleChange('dateRequest')}
          ></input>
          <input
            placeholder="Moneda destino" 
            value={values.toConvert}
            onChange={handleChange('toConvert')}
          ></input>
        </div>
        <div className="button">
          <button onClick={getExchangevalue} disabled={inputEmpty ? true : false}>Enviar</button>
        </div>
      </div>
      <div className="data">{data ? <div>El monto inicial cambiado a {values.toConvert} es: {data}</div> : null}</div>
    </>
  );
}

export default App;