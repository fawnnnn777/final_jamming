import React from "react";
import styles from './styles/playlist.module.css'
import Track from "./Track";

function Playlist(){


    return(
        <>
        <div className={styles.playlistDiv}>
            <h1>Create A New Playlist</h1>
            <form className={styles.playlistForm}>
                <input type="text"></input>
                <button>Add To My Spotify Account</button>
            </form>
            <Track></Track>
        </div>
        </>
    )
}

export default Playlist

