// En el componente MiApi.jsx
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function MiApi({ apiURL, sortOption }) {
  const [holidays, setHolidays] = useState([]);
  const [sortedHolidays, setSortedHolidays] = useState([]);
  const [originalHolidays, setOriginalHolidays] = useState([]); // Copia de los feriados originales

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          const holidaysData = data.data;
          setHolidays(holidaysData);
          setOriginalHolidays(holidaysData); // Almacenar una copia de los feriados originales
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

  // Función para aplicar el filtrado basado en el texto de filtrado
  const applyFilter = (filterText) => {
    if (filterText.trim() === '') {
      // Si el texto de filtrado está vacío, mostrar la lista completa
      setHolidays(originalHolidays);
    } else {
      // Filtrar la lista de feriados por el texto de filtrado
      const filtered = originalHolidays.filter((holiday) =>
        holiday.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setHolidays(filtered);
    }
  };

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
      <Buscador
        onSortChange={setSortOption}
        onFilterChange={applyFilter} // Pasar la función de filtrado al componente Buscador
      />
    </div>
  );
}

export default MiApi;
