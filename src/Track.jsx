import React from "react";
import styles from './styles/track.module.css'

function Track(props){


    return (
        <>
        <div className={styles.trackDiv}>
            <div className={styles.trackInfo}>
                <h2>{props.song.name}</h2>
                <h3> {props.song.artist} | {props.song.album}</h3>
            </div>
            <div className={styles.trackSave}>
                {props.isSaved === true ? <button onClick={()=> props.removeSong(props.song)}>X</button> 
                : 
                <button onClick={()=> props.addSong(props.song)}>&lt;3</button>}
            </div>
        </div>
        </>
    )
}

export default Track