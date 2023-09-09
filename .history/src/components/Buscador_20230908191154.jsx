import React, { useState } from 'react';

function Buscador({ onSortChange, onFilterChange }) {
  const [sortOption, setSortOption] = useState('asc'); // Opción de ordenamiento predeterminada
  const [filterText, setFilterText] = useState(''); // Texto de filtrado

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  const handleFilterChange = (e) => {
    const searchText = e.target.value;
    setFilterText(searchText);
    onFilterChange(searchText);
  };

  return (
    <div className="Buscador">
      <label htmlFor="sortSelect">Ordenar por:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="asc">Fecha Ascendente</option>
        <option value="desc">Fecha Descendente</option>
        <option value="month">Por Mes</option>
      </select>
      <input
        type="text"
        placeholder="Filtrar feriados"
        value={filterText}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Buscador;