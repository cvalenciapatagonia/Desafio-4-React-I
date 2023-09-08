import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [sortOption, setSortOption] = useState("asc"); // Estado para almacenar la opción de ordenamiento

  return (
    <div className="App">
      <header>
        {/* BARRA DE NAVEGACION */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            {/* <img src="assets/img/logo.png" className="img-fluid img-logo" /> */}
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
                    href="#Acerca-de-mi"
                  >
                    Funciones
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    href="#Mis-proyectos"
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
        {/* Fin de la barra de navegación */}
      </header>

      <section id="Hero-Section" className="text-dark text-end py-5 mt-1">
        <div className="container">
          <div className="ms-auto col-12 col-md-7">
            <h1 className="display-1 fw-bold my-5">
              Festiday 🌶️ {/* El signo agregado significa "cursando" */}
            </h1>
            <p className="my-5">
              Festiday es una aplicacion beta que permite observar en tiempo
              real los dias festivos de Chile. La aplicacion cuenta con
              distintas funcionalidades tales como un widget de escritorio y la
              posibilidad de vincularlo con google calendar y Outlook.
            </p>
            <div className="mb-5 pb-5">
              <a
                className="btn btn-lg btn-outline-info text-dark me-4"
                href="#Mis-proyectos"
              >
                Prueba la demo
              </a>
              <a
                className="btn btn-lg btn-outline-info text-dark"
                href="#Contacto"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ACERCA DE MI */}
      <section id="Acerca-de-mi" className="container text-center my-5">
        <h2 className="display-3 fw-bold my-4">Principales funciones</h2>




        <div className="row">
          <div className="col-12 col-md-4">
            <i className="fas fa-solid fa-brain fa-3x my-3"></i>
            <h3 className="my-3 fw-bold">Psicología</h3>
            <p className="my-3">
              Soy Psicólogo de profesión con un profundo interés en la Salud
              mental individual y de equipos, por lo que tengo experiencia en el
              desarrollo y fortalecimiento de habilidades blandas.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <i className="fas fa-bullhorn fa-3x my-3"></i>
            <h3 className="my-3 fw-bold">Liderazgo</h3>
            <p className="my-3">
              En mi experiencia laboral, me ha tocado ser parte de equipos y en
              la última etapa dirigirlos, por lo que poseo habilidades de
              liderazgo útiles al momento de obtener rendimiento individual y
              grupal a la hora de alcanzar objetivos.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <i className="fas fa-regular fa-lightbulb fa-3x my-3"></i>
            <h3 className="my-3 fw-bold">Creatividad</h3>
            <p className="my-3">
              Una de las razones por las que comencé a interesarme por el mundo
              de la tecnología, fue por la posibilidad de crear y probar cosas
              nuevas. En un inicio comencé con Excel, sin embargo, sentía que
              necesitaba algo más desafiante, claramente lo encontré en este
              nicho, lo cual me motiva y entusiasma día a día.
            </p>
          </div>
        </div>
      </section>
      {/* Fin de ACERCA DE MI */}

      {/* MIS PROYECTOS */}
      <section id="Mis-proyectos" className="my-5 p-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center text-dark mb-3">
            Festiday App demo
          </h2>
          <Buscador onSortChange={setSortOption} />
          <MiApi
            apiURL="https://api.victorsanmartin.com/feriados/en.json"
            sortOption={sortOption}
          />

          <div className="row"></div>
        </div>
      </section>
      {/* Fin de MIS PROYECTOS */}

      {/* CONTACTAME */}
      <section id="Contacto" className="container my-5">
        <h2 className="display-4 fw-bold text-center my-4">Contáctanos</h2>

        <p className="text-center my-4 d-none d-md-block">
          Envíanos un mensaje y te ofrecemos una prueba gratuita por 30 dias sin
          costo
        </p>

        <form>
          <div className="form-group mb-4">
            <label className="mb-2">Nombre</label>
            <input className="form-control" placeholder="Nombre" />
          </div>

          <div className="form-group mb-4">
            <label className="mb-2">Correo electrónico</label>
            <input className="form-control" placeholder="Correo electrónico" />
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
      </section>
      {/* Fin de CONTACTAME */}

      {/* FOOTER */}
      <footer className="text-center text-light p-4">
        <p className="mb-0">
          Cristian Valencia 2023. Todos los derechos reservados.
        </p>
      </footer>
      {/* Fin de FOOTER */}
    </div>
  );
}

export default App;

{
  /* <h1>Feriados en Chile</h1> */
}
{
  /* Pasa el estado y la función de cambio de ordenamiento al componente Buscador */
}
