

// function App() {

//   return (
//     <>
//       <h1>Hola</h1>
      
//     </>
//   )
// }

// export default App

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

import { useState, useEffect } from "react";
import "./App.css";
function App() {
// 3 - info guardará los valores traídos desde la API
const [info, setInfo] = useState([]);
// 2 - Llamamos a la función consultarApi al momento de montar el
componente
useEffect(() => {
consultarApi();
}, []);
// 1 - Función que consulta la API
const consultarApi = async () => {
const url = "https://api.gameofthronesquotes.xyz/v1/random";
const response = await fetch(url);
const data = await response.json();
setInfo(`${data.sentence} - ${data.character.name}`); // Con setInfo

};
return (
<>
{/* Mostramos la info */}
{info}
</>
);
}
export default App;