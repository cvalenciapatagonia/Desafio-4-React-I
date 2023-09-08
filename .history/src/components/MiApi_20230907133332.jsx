import React, { useEffect, useState } from 'react';
import moment from 'moment';

function MiApi({ apiURL, sortOption }) {
  const [holidays, setHolidays] = useState([]);
  const [sortedHolidays, setSortedHolidays] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
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
    const sortHolidays = () => {
      const sorted = [...holidays];
      if (sortOption === 'asc') {
        sorted.sort((a, b) => moment(a.date).diff(moment(b.date)));
      } else if (sortOption === 'desc') {
        sorted.sort((a, b) => moment(b.date).diff(moment(a.date)));
      } else if (sortOption === 'month' && selectedMonth) {
        sorted.filter((holiday) => moment(holiday.date).month() === parseInt(selectedMonth) - 1);
      }
      setSortedHolidays(sorted);
    };

    sortHolidays();
  }, [sortOption, holidays, selectedMonth]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className="MiApi">
      <h1>Feriados en Chile</h1>
      <div className="Filtros">
        {/* Pasa la función de cambio de mes al componente Buscador */}
        <Buscador onSortChange={setSortOption} onMonthChange={handleMonthChange} />
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
