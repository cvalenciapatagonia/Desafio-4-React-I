import React, { useState, useEffect } from 'react';

function Buscador({ onSortChange, holidays, setFilteredHolidays }) {
  const [sortOption, setSortOption] = useState('asc'); // Opción de ordenamiento predeterminada
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el valor del input de búsqueda

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  // Función para manejar cambios en el input de búsqueda
  const handleSearchChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    // Filtrar los días feriados basados en el nuevo texto de búsqueda
    const filtered = holidays.filter((holiday) =>
      holiday.title.toLowerCase().includes(newSearchText.toLowerCase())
    );

    // Actualizar los resultados filtrados
    setFilteredHolidays(filtered);
  };

  return (
    <div className="Buscador">
      <label htmlFor="sortSelect">Ordenar por:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="asc">Fecha Ascendente</option>
        <option value="desc">Fecha Descendente</option>
        <option value="month">Por Mes</option>
      </select>
      {/* Agregar el input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar feriado..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Buscador;
