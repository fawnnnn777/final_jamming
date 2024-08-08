import React, { useState } from "react";
import styles from './styles/playlist.module.css'
import Track from "./Track";

function Playlist(props){

    const [playlistName, setPlaylistName] = useState()

    const handleChange = (e) =>{
        setPlaylistName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(playlistName)
        props.createPlaylist(playlistName)
        setPlaylistName('')
    }

    return(
        <>
        <div className={styles.playlistDiv}>
            <h1>Create A New Playlist</h1>
            <form onSubmit={handleSubmit} className={styles.playlistForm}>
                <input onChange={handleChange} type="text" value={playlistName}></input>
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

