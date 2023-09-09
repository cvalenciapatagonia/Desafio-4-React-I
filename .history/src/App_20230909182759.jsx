// Importacion de bibliotacas y componentes
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  //Almacenamiento y estado de los componentes
  const [sortOption, setSortOption] = useState("asc"); //Inicia con fechas ascendentes
  const [searchText, setSearchText] = useState(""); //Inicia en blanco para introducir datos
  const [holidays, setHolidays] = useState([]); // Almacena la lista de feriados de la Api
  const [filteredHolidays, setFilteredHolidays] = useState([]); //Almacena la lista de feriados FIltrada de la Api

  const handleSearchChange = (e) => { //Actualizamos estado en la medida que se escriben datos en el input
    setSearchText(e.target.value); //Realiza el filtrado en funcion de los datos ingresados y/o borrados en el input, actualizando la tabla de feriados.
  };

  //Filtra los feriados en funcion del texto, iterando sobre los datos independiente de mayuscula o minuscula.
  const filterHolidays = () => {
    const filtered = holidays.filter((holiday) =>
      holiday.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filtered;
  };

  //Solicitud de los datos a la Api mediante fetch para actualizar y convertir a formato json.
  useEffect(() => {
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then((response) => response.json())
      .then((data) => {
        //Si la solicitud es exitosa, se muestran los feriados mediante data.data, de lo contrario, arroja mensaje de error en consola.
        if (data.status === "success") {
          setHolidays(data.data);
          setFilteredHolidays(data.data);
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener datos de la API de feriados de Chile:",
          error
        );
      });
  }, []);

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            <p className="display-5 fw-bold text-light logo-img">
              Festiday🌶️
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#"></a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#Function-container"
                  >
                    Funciones
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    href="#app-demo"
                  >
                    Demo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="Hero-Section" className="text-dark text-end py-5 mt-5">
        <div className="container">
          <div className="ms-auto col-12 col-md-7">
            <h1 className="display-1 fw-bold my-5">
              Festiday🌶️
            </h1>
            <p className="my-5 fw-bold">
              Festiday es una aplicacion beta que permite observar en tiempo
              real los dias festivos de Chile. La aplicacion cuenta con
              distintas funcionalidades tales como un widget de escritorio y la
              posibilidad de vincularlo con google calendar y Outlook.
            </p>
            <div className="mb-5 pb-5">
              <a
                className="btn btn-lg btn-outline-danger text-dark me-4"
                href="#app-demo"
              >
                Prueba la demo
              </a>
              <a
                className="btn btn-lg btn-outline-danger text-dark"
                href="#Contacto"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="Function-container" className="">
        <div className="description-container container text-center my-5">
          <h2 className="display-3 fw-bold my-4 mb-5">Principales funciones</h2>

          <div className="row">
            <div className="col-12 col-md-4">
              <i className="fa fa-refresh fa-4x"></i>
              <h3 className="my-3 fw-bold">Sincronizacion</h3>
              <p className="my-3">
                Festiday permite que sincronices con tus aplicaciones estándar de
                calendario como Outlook o Google Calendar, de tal forma que siempre
                estés actualizado respecto a los días festivos que se aproximan.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <i className="fa fa-calendar fa-4x"></i>
              <h3 className="my-3 fw-bold">Planificacion</h3>
              <p className="my-3">
                Permite que en función de los días feriados, puedas planificarte
                previamente para disfrutar de tu tiempo libre
              </p>
            </div>
            <div className="col-12 col-md-4">
              <i className="fa fa-bell fa-4x"></i>
              <h3 className="my-3 fw-bold">Recordatorio</h3>
              <p className="my-3">
                La aplicación permite introducir recordatorios que una vez que se
                sincronizan, permitirá que siempre estés al tanto con anterioridad
                de los días festivos y con esto mayor capacidad de planificación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="app-demo" className="my-5 p-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center text-dark mb-3">
            Festiday App demo
          </h2>
          <Buscador
            onSortChange={setSortOption}
            searchText={searchText}
            setSearchText={setSearchText}
            holidays={holidays} 
            setFilteredHolidays={setFilteredHolidays} 
          />
          <MiApi
            apiURL="https://api.victorsanmartin.com/feriados/en.json"
            sortOption={sortOption}
            holidays={filteredHolidays}
          />

          <div className="row"></div>
        </div>
      </section>

      <section id="Contacto">
        <div className="form-container container my-5">
          <h2 className="display-4 fw-bold text-center my-4">Contáctanos</h2>

          <p className="text-center my-4 d-none d-md-block">
            Envíanos un mensaje y te ofrecemos una prueba gratuita por 30 días
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

      <footer className="text-center text-light p-4">
        <p className="mb-0">Festiday🌶️ 2023. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
