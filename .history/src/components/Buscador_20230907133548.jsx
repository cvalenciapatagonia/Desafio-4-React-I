import React, { useState } from 'react';

function Buscador({ onSortChange, onMonthChange }) {
  const [sortOption, setSortOption] = useState('asc'); // Opción de ordenamiento predeterminada
  const [selectedMonth, setSelectedMonth] = useState(''); // Mes seleccionado

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption); // Llama a la función onSortChange con la opción de ordenamiento seleccionada
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
    onMonthChange(selectedMonth);
  };

  return (
    <div className="Buscador">
      <label htmlFor="sortSelect">Ordenar por:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="asc">Fecha Ascendente</option>
        <option value="desc">Fecha Descendente</option>
        <option value="month">Por Mes</option>
      </select>

      {/* Agregar otro select para seleccionar el mes */}
      <label htmlFor="monthSelect">Filtrar por Mes:</label>
      <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Todos los Meses</option>
        <option value="01">Enero</option>
        <option value="02">Febrero</option>
        <option value="03">Marzo</option>
        <option value="04">Abril</option>
        <option value="05">Mayo</option>
        <option value="06">Junio</option>
        <option value="07">Julio</
