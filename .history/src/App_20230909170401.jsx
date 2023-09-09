import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [sortOption, setSortOption] = useState("asc"); // Estado para almacenar la opción de ordenamiento
  const [searchText, setSearchText] = useState(""); // Estado para almacenar el valor del input de búsqueda
  const [filteredHolidays, setFilteredHolidays] = useState([]); // Estado para almacenar los días feriados filtrados

  // Función para manejar cambios en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Función para filtrar los días feriados en función del valor de búsqueda
  useEffect(() => {
    const filtered = MiApi.filter((holiday) =>
      holiday.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredHolidays(filtered);
  }, [searchText]);

  return (
    <div className="App">
      <header>
        {/* BARRA DE NAVEGACION */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          {/* ... (código de la barra de navegación) */}
        </nav>
        {/* Fin de la barra de navegación */}
      </header>

      <section id="Hero-Section" className="text-dark text-end py-5 mt-5">
        {/* ... (código de la sección de héroe) */}
      </section>

      {/* FUNCIONES */}
      <section id="Function-container" className="">
        {/* ... (código de la sección de funciones) */}
      </section>
      {/* Fin de FUNCIONES */}

      {/* APP DEMO */}
      <section id="app-demo" className="my-5 p-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center text-dark mb-3">
            Festiday App demo
          </h2>
          <Buscador onSortChange={setSortOption} />
          {/* Agrega el input de búsqueda aquí */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar feriado..."
            value={searchText}
            onChange={handleSearchChange}
          />
          {/* Pasa el valor de búsqueda al componente MiApi */}
          <MiApi
            apiURL="https://api.victorsanmartin.com/feriados/en.json"
            sortOption={sortOption}
            holidays={filteredHolidays} // Pasa los días feriados filtrados como prop
          />

          <div className="row"></div>
        </div>
      </section>
      {/* Fin de APP DEMO */}

      {/* CONTACTAME */}
      <section id="Contacto">
        {/* ... (código de la sección de contacto) */}
      </section>
      {/* Fin de CONTACTAME */}

      {/* FOOTER */}
      <footer className="text-center text-light p-4">
        {/* ... (código del footer) */}
      </footer>
      {/* Fin de FOOTER */}
    </div>
  );
}

export default App;
