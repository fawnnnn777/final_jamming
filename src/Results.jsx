import React from "react";
import Track from "./Track";
import styles from './styles/results.module.css'

function Results(props){
    return(
        <>
        <div className={styles.resultsDiv}>
            <h1>Results</h1>
            {props.songs.map((song)=>{
                return <Track name={song.name} album={song.album} artist={song.artist}></Track>
            })}
        </div>
        </>
    )
}

export default Results