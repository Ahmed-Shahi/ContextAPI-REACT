import { useState } from 'react'
import React  from 'react'
import Counter from '../Components/Counter/Counter'
import { Context } from '../Components/Context/Context'

export default function Page2() {
   
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <Context.Provider value={{ count, setCount }} >
                <Counter />
            </Context.Provider>
        </div>
    )
}
