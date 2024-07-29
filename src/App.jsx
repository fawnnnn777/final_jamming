import React, { useState } from "react";
import './App.css'
import Searchbar from "./Searchbar";

function App(){
    const [count, setCount] = useState(0)

    const handleclick = () =>{
        setCount(count +1 )
    }
    return(
        <>
    <h1>{count}</h1>
    <button onClick={handleclick}>count</button>

    <Searchbar/>

    </>

    )
    
}

export default App