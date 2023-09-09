import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [sortOption, setSortOption] = useState("asc"); // Estado para almacenar la opción de ordenamiento
  const [searchText, setSearchText] = useState(""); // Estado para almacenar el valor del input de búsqueda
  const [holidays, setHolidays] = useState([]); // Estado para almacenar los datos de la API
  const [filteredHolidays, setFilteredHolidays] = useState([]); // Estado para almacenar los resultados filtrados

  // Función para manejar cambios en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Función para filtrar los feriados en función del texto de búsqueda
  const filterHolidays = () => {
    const filtered = holidays.filter((holiday) =>
      holiday.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filtered;
  };

  useEffect(() => {
    // Realiza la llamada a la API y obtiene los datos
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setHolidays(data.data);
          setFilteredHolidays(data.data); // Inicializa los resultados filtrados con todos los datos
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener datos de la API de feriados de Chile:",
          error
        );
      });
  }, []); // Se ejecuta una vez al cargar el componente

  return (
    <div className="App">
      <header>
        {/* BARRA DE NAVEGACION */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          {/* ... (código anterior) */}
        </nav>
        {/* Fin de la barra de navegación */}
      </header>

      <section id="Hero-Section" className="text-dark text-end py-5 mt-5">
        <div className="container">
          {/* ... (código anterior) */}
        </div>
      </section>

      {/* FUNCIONES */}
      <section id="Function-container" className="">
        <div className="description-container container text-center my-5">
          {/* ... (código anterior) */}
        </div>
      </section>
      {/* Fin de FUNCIONES */}

      {/* APP DEMO */}
      <section id="app-demo" className="my-5 p-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center text-dark mb-3">
            Festiday App demo
          </h2>
          <Buscador
            onSortChange={setSortOption}
            searchText={searchText}
            setSearchText={setSearchText}
            holidays={holidays} // Pasa los datos completos de feriados
            setFilteredHolidays={setFilteredHolidays} // Pasa la función para actualizar los resultados filtrados
          />
          <MiApi
            apiURL="https://api.victorsanmartin.com/feriados/en.json"
            sortOption={sortOption}
            holidays={filteredHolidays} // Utiliza los resultados filtrados
          />

          <div className="row"></div>
        </div>
      </section>
      {/* Fin de APP DEMO */}

      {/* CONTACTAME */}
      <section id="Contacto">
        <div className="form-container container my-5">
          <h2 className="display-4 fw-bold text-center my-4">Contáctanos</h2>

          <p className="text-center my-4 d-none d-md-block">
            Envíanos un mensaje y te ofrecemos una prueba gratuita por 30 dias
            sin costo
          </p>

          <form>
            <div className="form-group mb-4">
              <label className="mb-2">Nombre</label>
              <input className="form-control" placeholder="Nombre" />
            </div>

            <div className="form-group mb-4">
              <label className="mb-2">Correo electrónico</label>
              <input
                className="form-control"
                placeholder="Correo electrónico"
              />
            </div>

            <div className="form-group">
              <label className="mb-2">Mensaje</label>
              <textarea
                className="form-control"
                placeholder="Escribe aquí tu mensaje"
              ></textarea>
            </div>

            <div className="my-3 text-end">
              <button className="btn bg-dark text-light">Enviar</button>
            </div>
          </form>
        </div>
      </section>
      {/* Fin de CONTACTAME */}

      {/* FOOTER */}
      <footer className="text-center text-light p-4">
        <p className="mb-0">Festiday🌶️ 2023. Todos los derechos reservados.</p>
      </footer>
      {/* Fin de FOOTER */}
    </div>
  );
}

export default App;
