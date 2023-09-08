import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los iconos de Bootstrap
import './App.css'; // Importa tu archivo de estilos personalizados

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* Page heading */}
                <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                {/* Signup form */}
                <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                  {/* Email address input */}
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control form-control-lg"
                        id="emailAddress"
                        type="email"
                        placeholder="Email Address"
                        data-sb-validations="required,email"
                      />
                      <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                        Email Address is required.
                      </div>
                      <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">
                        Email Address Email is not valid.
                      </div>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Icons Grid */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {/* Fully Responsive */}
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
              </div>
            </div>
            {/* Bootstrap 5 Ready */}
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                <h3>Bootstrap 5 Ready</h3>
                <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
              </div>
            </div>
            {/* Easy to Use */}
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcases */}
      <section className="showcase">
        {/* Resto de tu contenido aquí */}
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center bg-light">
        {/* Resto de tu contenido aquí */}
      </section>

      {/* Call to Action */}
      <section className="call-to-action text-white text-center" id="signup">
        {/* Resto de tu contenido aquí */}
      </section>

      {/* Footer */}
      <footer className="footer bg-light">
        {/* Resto de tu contenido aquí */}
      </footer>
    </div>
  );
}

export default App;





























// function App() {

//   return (
//     <>
//       <h1>Hola</h1>
      
//     </>
//   )
// }

// export default App

//? EJEMPLO CONTADOR CON SIDE EFFECT

// import { useState, useEffect } from 'react'
// import './App.css'
// function App() {
// const [count, setCount] = useState(0)
// // Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
// // Update the document title using the browser API
// document.title = `You clicked ${count} times`
// })
// return (
// <>
// <p>You clicked {count} times</p>
// <button onClick={() => setCount(count + 1)}>Click me</button>
// </>
// )
// }
// export default App

//? EJEMPLO SIN SIDE EFFECT

// import { useState, useEffect } from 'react'
// function App() {
// const [nombre, setNombre] = useState("");
// useEffect(() => {
//     console.log("hola")
//     }, [])
    
// return (
// <div className="App">
// <h1>Manejo de efectos en react</h1>
// <form>
// <input
// type="text"
// placeholder="nombre"
// name={nombre}
// value={nombre}
// onChange={(e) => setNombre(e.target.value)}
// />
// </form>
// </div>
// );
// }
// export default App

//? EJEMPLO API GOT

// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


// function App() {
// // 3 - info guardará los valores traídos desde la API
// const [info, setInfo] = useState([]);
// // 2 - Llamamos a la función consultarApi al momento de montar el componente
// useEffect(() => {
// consultarApi();
// }, []);
// // 1 - Función que consulta la API
// const consultarApi = async () => {
// const url = "https://api.gameofthronesquotes.xyz/v1/random";
// const response = await fetch(url);
// const data = await response.json();
// setInfo(`${data.sentence} - ${data.character.name}`); // Con setInfo actualizamos el estado
// };
// return (
// <>
// {/* Mostramos la info */}
// {info}
// </>
// );
// }
// export default App;

//? EJEMPLO USEREF (evita una nueva renderizacion de componenta, tal como lo hace use state)

// import { useRef} from 'react'
// import { useEffect } from "react";

// import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
// // Creamos una referencia utilizando useRef() y la asignamos a la
// // constante inputRef, esta referencia permitirá acceder al elemento del DOM correspondiente al campo de entrada
// const inputRef = useRef()
// useEffect(() => {
//     // Dentro de esta función, llamamos a la referencia inputRef.current
// // para tener acceso directo al elemento actual al que se está haciendo referencia e invocamos al método focus()
// inputRef.current.focus();
// }, []);
// return (
// <>
// <h1>Ejemplo useRef - Focus automático</h1>
// {/* // El atributo ref={inputRef} asigna la referencia al campo de entrada, esto permitirá acceder a él y aplicar el enfoque. */}
// <input type="text" placeholder="Nombre" ref={inputRef}/>
// <input type="text" placeholder="Correo electrónico" />
// <input type="text" placeholder="Teléfono" />
// </>
// )
// }
// export default App;

//? DOM VIRTUAL

//? MANEJO DE EFECTOS

