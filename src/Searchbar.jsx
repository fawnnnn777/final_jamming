import React, { useState } from "react";


function Searchbar(props){

    const [input, setInput] = useState()

    const handleInput = ()=>{
        setInput((prev)=>{
            prev = input
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }



    return(
        <>
            <form onSubmit={()=>handleSubmit(input)} action="">
                <input onChange={handleInput} type="text" value={input}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Searchbar