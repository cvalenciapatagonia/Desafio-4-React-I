import React, { useEffect, useState } from 'react';
import moment from 'moment';

function MiApi({ apiURL }) {
  const [holidays, setHolidays] = useState([]);
  const [sortedHolidays, setSortedHolidays] = useState([]);
  const [sortOption, setSortOption] = useState('asc');

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
  }, [apiURL]);

  useEffect(() => {
    // Función para ordenar los feriados según la opción seleccionada
    const sortHolidays = () => {
      const sorted = [...holidays];
      if (sortOption === 'asc') {
        sorted.sort((a, b) => moment(a.date).diff(moment(b.date)));
      } else if (sortOption === 'desc') {
        sorted.sort((a, b) => moment(b.date).diff(moment(a.date)));
      } else if (sortOption === 'month') {
        sorted.sort((a, b) => moment(a.date).month() - moment(b.date).month());
      }
      setSortedHolidays(sorted);
    };

    sortHolidays();
  }, [sortOption, holidays]);

  return (
    <div className="MiApi">
      <h1>Feriados en Chile</h1>
      <div className="Filtros">
        <Buscador onSortChange={setSortOption} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Feriado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {sortedHolidays.map((holiday) => (
            <tr key={holiday.date}>
              <td>{holiday.title}</td>
              <td>{holiday.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;
