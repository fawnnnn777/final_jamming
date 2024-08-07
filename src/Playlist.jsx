import React from "react";
import styles from './styles/playlist.module.css'
import Track from "./Track";

function Playlist(props){

    return(
        <>
        <div className={styles.playlistDiv}>
            <h1>Create A New Playlist</h1>
            <form className={styles.playlistForm}>
                <input type="text"></input>
                <button>Add To My Spotify Account</button>
            </form>
            {props.playlist.map((song)=>{
                return <Track removeSong={props.removeSong} isSaved={true} song={song}></Track>
            })}
        </div>
        
        </>
    )
}

export default Playlist

