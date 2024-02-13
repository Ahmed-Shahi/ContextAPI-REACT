import './App.css';
import { Context } from './Components/Context/Context';
import { useState } from 'react';
import Router from './Router/Router';
import Page1 from './Pages/Page1';

function App() {
    const [count, setCount]= useState(0)

  return (
    <div className='App'> 
      <Context.Provider value={{count,setCount}} >
        <Router/>
      </Context.Provider>
    </div>

  );
}

export default App;

