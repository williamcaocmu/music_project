import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AlbumList from './albumList';

const REQ_URL = " http://localhost:3005/artists"

const Artist = (props) =>{ 

    const [artist, setArtist] = useState('');

    useEffect(()=>{
        axios.get(`${REQ_URL}/${props.match.params.artistId}`)
        .then( response => {
            setArtist(response.data)
        }).catch( error=>{
            props.history.push('/home');
        })
    },[props])


    return(
        <>
            <div className="artist_bio">
                <div className="avatar">
                    <span style={{
                        background:`url('/images/covers/${artist.cover}.jpg') no-repeat`
                    }}></span>
                </div>
                <div className="bio">
                    <h3>{ artist.name }</h3>
                    <div className="bio_text">
                        {artist.bio}
                    </div>
                </div>
               <AlbumList albumList={artist.albums}/>

            </div>
        </>
    )
}

export default Artist;