

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

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    <>
    <h1>Manejo de efectos en react</h1>
    <form>
    <input
    type="email"
    placeholder="nombre"
    name={email}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="password"
    placeholder="password"
name={password}
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</form>
</>
);