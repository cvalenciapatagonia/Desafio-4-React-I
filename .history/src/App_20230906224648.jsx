

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

import { useState, useEffect } from 'react'
function App() {
const [nombre, setNombre] = useState("");
useEffect(() => {
console.log("hola")
})
return (
<div className="App">
<h1>Manejo de efectos en react</h1>
<form>
<input
type="text"
placeholder="nombre"
name={nombre}
value={nombre}
onChange={(e) => setNombre(e.target.value)}
/>
</form>
</div>
);
}
export default App