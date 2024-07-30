import React from "react";
import Track from "./Track";
import styles from './styles/results.module.css'

function Results(){
    return(
        <>
        <div className={styles.resultsDiv}>
            <h1>Results</h1>
            <Track></Track>
            <Track></Track>
            <Track></Track>
        </div>
        </>
    )
}

export default Results