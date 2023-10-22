import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Registros:</h1>
      <ul>
        {data.map(item => (
          <li key={item.local_id}>
            <p>Fecha: {item.fecha}</p>
            <p>Nombre: {item.local_nombre}</p>
            <p>Comuna: {item.comuna_nombre}</p>
            <p>Dirección: {item.local_direccion}</p>
            <p>Hora Apertura: {item.funcionamiento_hora_apertura}</p>
            <p>Hora Cierre: {item.funcionamiento_hora_cierre}</p>
            <p>Teléfono: {item.local_telefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;