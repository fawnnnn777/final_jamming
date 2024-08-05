import React from "react";
import styles from './styles/track.module.css'

function Track(props){
    return (
        <>
        <div className={styles.trackDiv}>
            <div className={styles.trackInfo}>
                <h2>{props.name}</h2>
                <h3> {props.artist} | {props.album}</h3>
            </div>
            <div className={styles.trackSave}>
                <button>&lt;3</button>
            </div>
        </div>
        </>
    )
}

export default Track