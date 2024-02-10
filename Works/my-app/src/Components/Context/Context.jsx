import { createContext } from "react";

export const Context = createContext(null);


// export const Provider = (props)=>{
//     const [count, setCount]= useState(0)
//     return(
//         <Context.Provider value={{count,setCount}}>
//             {props.childern}
//         </Context.Provider>
//     )
// }