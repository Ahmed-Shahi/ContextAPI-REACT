import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'

export default function Counter() {
    
    const number = useContext(Context)
    // console.log(number);
    function Inc() {
        number.setCount(number.count + 1)
    }
    
    function Dec() {
        number.setCount(number.count - 1)
        
    }

    return (
        <div>
            <h1>{number.count}</h1>
            <button onClick={Inc} >Increment</button>
            <button onClick={Dec}>Decrement</button>
        </div>
    )
}