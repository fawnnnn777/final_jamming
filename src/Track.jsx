import React from "react";
import styles from './styles/track.module.css'

function Track(){
    return (
        <>
        <div className={styles.trackDiv}>
            <div className={styles.trackInfo}>
                <h2>Track Title</h2>
                <h3>Artist | Album </h3>
            </div>
            <div className={styles.trackSave}>
                <button>&lt;3</button>
            </div>
        </div>
        </>
    )
}

export default Track