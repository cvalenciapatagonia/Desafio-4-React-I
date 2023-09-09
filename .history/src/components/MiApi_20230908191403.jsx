import React, { useEffect, useState } from 'react';
import moment from 'moment';

function MiApi({ apiURL, sortOption }) {
  const [holidays, setHolidays] = useState([]);
  const [sortedHolidays, setSortedHolidays] = useState([]);

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
      } else if (sortOption === 'month') {
        sorted.sort((a, b) => moment(a.date).month() - moment(b.date).month());
      }
      setSortedHolidays(sorted);
    };

    sortHolidays();
  }, [sortOption, holidays]);

  return (
    <div className="MiApi">
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
