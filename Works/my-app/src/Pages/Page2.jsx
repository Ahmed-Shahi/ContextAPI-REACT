import React  from 'react'

import { Context } from '../Components/Context/Context'
import { useContext } from 'react'
export default function Page2() {
   
    
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
