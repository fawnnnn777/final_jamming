import React, { useState } from "react";
import styles from './styles/searchbar.module.css'
function SearchBar(props){

    const [userInput, setUserInput] = useState('')

    const submit = (e)=>{
        e.preventDefault()
        props.searchQuery(e, userInput)
    }

    const handleInput = (e) =>{
        setUserInput(e.target.value)
    }


    return(
        <>
            <form onSubmit={submit} className={styles.searchForm}>
                <input onChange={handleInput} type="text" value={userInput}></input>
                <button type="submit"><span class="material-symbols-outlined">
search
</span></button>       
            </form>
        </>
    )
}

export default SearchBar