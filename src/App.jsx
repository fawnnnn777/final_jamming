import './App.css'
import Results from "./Results";
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import { useEffect, useState } from 'react';

function App(){

    const [songs, setSongs] = useState([])

    const [accessToken, setAccessToken] = useState(null)

    useEffect(()=>{
        const params = getHashParams()
        if(params.access_token){
            setAccessToken(params.access_token)
        }
    },[])


    const getHashParams = () => {
        const hashParams = {};
        let e;
        const r = /([^&;=]+)=?([^&;]*)/g;
        const q = window.location.hash.substring(1);
        // eslint-disable-next-line
        while (e = r.exec(q)) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      };

    const handleAuthorize = ()=>{
        const client_id = '66ad9f06e98a41d3b9c4210d7b4eb5c0'
        const redirect_url = 'http://localhost:3000'
        const scopes = 'playlist-modify-private playlist-modify-public user-read-private'
        let url = 'https://fawnjamming.netlify.app/' + 
        '?response_type=token' +
        '&client_id=' + encodeURIComponent(client_id) +
        '&redirect_uri=' + encodeURIComponent(redirect_url)+
        '&scope=' + encodeURIComponent(scopes)

        window.location = url
    }


    async function fetchSongs(query){
        let songs = []
        const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`,{
            method: "GET",
            headers:{
                'Authorization' : 'Bearer ' + accessToken
            }
        })
        const search = await result.json()
        for(let track in search.tracks.items){
            let songObj = {}
            songObj.name = search.tracks.items[track].name
            songObj.album = search.tracks.items[track].album.name
            songObj.id = search.tracks.items[track].id
            songObj.uri = search.tracks.items[track].uri
            songObj.artist = search.tracks.items[track].artists[0].name
            songs.push(songObj)
        }
        return songs
    }

    async function searchQuery(e, query){
        e.preventDefault()
        console.log(query)
        let results = await fetchSongs(query)
        setSongs(results)
        console.log(songs)
    }
    

    return(
        <>
    <h1 style={{textAlign:'center'}}>Spotify Jamming</h1>
    <button onClick={handleAuthorize}>Authorize</button>
        <SearchBar searchQuery={searchQuery}></SearchBar>
        <div className='mainContainer'>
        <Results songs={songs}></Results>
        <Playlist></Playlist>
        </div>
    </>

    )
    
}

export default App