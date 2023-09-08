import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Template from './components/Template';
// import MiApi from './components/MiApi';
// import Buscador from './components/Buscador';

function App() {
  const [sortOption, setSortOption] = useState('asc'); // Estado para almacenar la opción de ordenamiento

  return (
    <div className="App">
      <Template/>
    </div>
  );
}

export default App;


{/* <h1>Feriados en Chile</h1> */}
{/* Pasa el estado y la función de cambio de ordenamiento al componente Buscador */}
{/* <Buscador onSortChange={setSortOption} />
<MiApi apiURL="https://api.victorsanmartin.com/feriados/en.json" sortOption={sortOption} /> */}