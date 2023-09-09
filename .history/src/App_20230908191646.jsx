// En el componente MiApi.jsx
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Buscador from './components/Buscador'; // Asegúrate de importar el componente Buscador

function MiApi({ apiURL, sortOption }) {
  const [holidays, setHolidays] = useState([]);
  const [sortedHolidays, setSortedHolidays] = useState([]);
  const [originalHolidays, setOriginalHolidays] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          const holidaysData = data.data;
          setHolidays(holidaysData);
          setOriginalHolidays(holidaysData);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API de feriados de Chile:', error);
      });
  }, [apiURL]);

  useEffect(() => {
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

  const applyFilter = (filterText) => {
    if (filterText.trim() === '') {
      setHolidays(originalHolidays);
    } else {
      const filtered = originalHolidays.filter((holiday) =>
        holiday.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setHolidays(filtered);
    }
  };

  return (
    <div className="MiApi">
      <Buscador onFilterChange={applyFilter} />
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
