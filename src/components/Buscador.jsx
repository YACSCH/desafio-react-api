import React, { useState } from "react";

const Buscador = ({ setData, originalData }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    if (valorBusqueda === "") {
      // Si el valor de búsqueda está vacío, restaura los datos a los originales
      setData(originalData);
    } else {
      // Realiza el filtrado de datos basado en el valor de búsqueda
      const datosFiltrados = originalData.filter((farmacia) =>
        Object.values(farmacia)
          .join(" ")
          .toLowerCase()
          .includes(valorBusqueda.toLowerCase())
      );

      setData(datosFiltrados);
    }
  };

  return (
    <div className='search'>
     <label htmlFor='txtsearch'>Busqueda :</label>  
      <input
        type='text'
        name='txtsearch'
        id='txtsearch'
        placeholder='ingrese criterio de busqueda'
        value={busqueda}
        onChange={handleBusqueda}
        className='search-input'
      />
    </div>
  );
};

export default Buscador;