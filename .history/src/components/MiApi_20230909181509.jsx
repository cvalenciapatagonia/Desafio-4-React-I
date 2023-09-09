import React, { useEffect, useState } from 'react'; //Administramos los estados iniciales y en general para luego manejar los efectos secundarios
import moment from 'moment'; //Biblioteca utilizada para el manejo y formateo de fechas utilizadas en el filtro

function MiApi({ apiURL, sortOption, holidays }) { //Props utilizados para utilizar la api de feriados, ordenar los feriados y obtener la matriz de datos de la Api.
  const [sortedHolidays, setSortedHolidays] = useState([]); // Estado para almacenar y mostrar los feriados segun la pciones seleccionada

  useEffect(() => { // Se ejecuta para realizar la solicitu a la Api mediante fetch, tratando de obtener los datos de la api.De no ser exitoso, el error que se muestra es el texto en consola señalando que existe un error en la recepcion de datos.
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

  useEffect(() => { //ordenamos los feriados segun opcion seleccionada. luego crea una copia de los datos utilizando moment para el orden de las fechas. 
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

  //En base a lo anterior, renderizamos y mostramos segun los datos ingresados y el orden solicitado 
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

export default MiApi; //Exportamos la api al componente App.jsx