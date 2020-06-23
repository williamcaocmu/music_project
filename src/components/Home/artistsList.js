import React from 'react';
import {Link} from 'react-router-dom';

const ArtistsList = ({allArtists}) => {

    const list = (values) => (
      values ?
            values.map( item => (
                <Link
                    key={item.id}
                    to={`/artist/${item.id}`}
                    className="artist_item"
                    style={{
                        background: `url('/images/covers/${item.cover}.jpg')` 
                    }}
                >
                    <div>{item.name}</div>
                </Link>
            ))
      : null
    )

    return(
        <div className="artists_list">
            <h4>Browse the artists</h4>
            <div className="artist_container">
                {list(allArtists)}
            </div>
        </div>
    )
}

export default ArtistsList;