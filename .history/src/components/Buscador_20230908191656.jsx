import React from 'react';

const Buscador = ({ onFilterChange }) => {
  const handleInputChange = (e) => {
    const filterText = e.target.value;
    onFilterChange(filterText);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Filtrar feriados"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
