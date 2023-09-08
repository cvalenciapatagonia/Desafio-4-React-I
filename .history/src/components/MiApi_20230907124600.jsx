import React, { useEffect, useState } from 'react';

function MiApi({ apiURL }) {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET a la API de feriados de Chile
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setHolidays(data.data);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API de feriados de Chile:', error);
      });
  }, [apiURL]); // Agrega apiURL como una dependencia

  return (
    <div className="MiApi">
      <h1>Feriados en Chile</h1>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}>
            <strong>{holiday.title}</strong> ({holiday.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiApi;
