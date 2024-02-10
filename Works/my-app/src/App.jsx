import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import { Context } from './Components/Context/Context';
import { useState } from 'react';

function App() {
    const [count, setCount]= useState(0)

  return (
    <div className='App'>
      
      
      <Context.Provider value={{count,setCount}} >
        <Navbar />
        <Counter />
        
        
      </Context.Provider>
    </div>

  );
}

export default App;

