import React, { useEffect, useState } from 'react';
import moment from 'moment';

function MiApi({ apiURL, sortOption }) {
  const [holidays, setHolidays] = useState([]);
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
    const filteredHolidays = holidays.filter((holiday) => {
      if (!selectedMonth) {
        return true; // Si no se selecciona un mes, mostrar todos los feriados
      }
      const holidayMonth = moment(holiday.date).format('MM');
      return holidayMonth === selectedMonth;
    });

    const sortedHolidays = [...filteredHolidays];

    if (sortOption === 'asc') {
      sortedHolidays.sort((a, b) => moment(a.date).diff(moment(b.date)));
    } else if (sortOption === 'desc') {
      sortedHolidays.sort((a, b) => moment(b.date).diff(moment(a.date)));
    }

    setSortedHolidays(sortedHolidays);
  }, [holidays, sortOption, selectedMonth]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className="MiApi">
      <h1>Feriados en Chile</h1>
      <div className="Filtros">
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
