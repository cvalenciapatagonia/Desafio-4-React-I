import React, { useState, useEffect } from 'react'; //Administramos los estados iniciales y en general para luego manejar los efectos secundarios

function Buscador({ onSortChange, holidays, setFilteredHolidays }) {
  const [sortOption, setSortOption] = useState('asc'); // Ordenamiento predeterminado de manera ascendente
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el input de búsqueda (Inicia en 0)

  const handleSortChange = (e) => { //Se ejecuta cuando hay un cambio en la seleccion del orden
    const selectedOption = e.target.value; // Cambio de valor en el select
    setSortOption(selectedOption); //Actualizacion del estado con nuevo valor
    onSortChange(selectedOption); // Notificacion al componente padre acerca del cambio
  };

  // Función Input de busqueda
  const handleSearchChange = (e) => { //Funcion que se activa cuando cambia la info en el input de busqueda
    const newSearchText = e.target.value; //Obtencion de los nuevos datos al ser ingresados en el input
    setSearchText(newSearchText); //Actualiza el estado en funcion de datos ingresados o borrados.

    // Filtrar los días feriados basados en el nuevo texto de búsqueda
    const filtered = holidays.filter((holiday) => 
      holiday.title.toLowerCase().includes(newSearchText.toLowerCase()) //Filtramos 
    );

    // Actualizar los resultados filtrados
    setFilteredHolidays(filtered); //Muestra los resultados filtrados segun los datos ingresados en el input en un nuevo array.
  };

  return (
    //Agregamos el filtro que permite el orden de los elementos.
    <div className="Buscador">
      <label htmlFor="sortSelect">Ordenar por:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="asc">Fecha Ascendente</option>
        <option value="desc">Fecha Descendente</option>
        <option value="month">Por Mes</option>
      </select>

      {/* Agregamos el input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar feriado..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Buscador; //Exportamos componente a App.jsx
