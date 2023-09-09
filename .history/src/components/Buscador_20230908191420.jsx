import React, { useState } from 'react';

function Buscador({ onSortChange }) {
  const [sortOption, setSortOption] = useState('asc'); // Opción de ordenamiento predeterminada

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <div className="Buscador">
      <label htmlFor="sortSelect">Ordenar por:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="asc">Fecha Ascendente</option>
        <option value="desc">Fecha Descendente</option>
        <option value="month">Por Mes</option>
      </select>
    </div>
  );
}

export default Buscador;