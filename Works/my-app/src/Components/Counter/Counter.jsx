import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'
export default function Counter() {
    
   
    const [num,setNum] = useContext(Context)
    function Inc() {
        setNum(num + 1)
    }
    
    function Dec() {
        setNum(num - 1)
        
    }
    const ResetValue = () => {
        setNum(num = 0)
    }
    return (
        <div>
            
            <h1>{num}</h1>
            <button onClick={Inc} >Increment</button>
            <button onClick={Dec}>Decrement</button>
            <button onClick={ResetValue}>Resert</button>
        </div>
    )
}