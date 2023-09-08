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
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'start' }}>Feriado</th> {/* Aplica estilo para alinear el texto a la izquierda */}
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.date}>
              <td style={{ textAlign: 'start' }}>{holiday.title}</td> {/* Aplica estilo para alinear el texto a la izquierda */}
              <td>{holiday.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;