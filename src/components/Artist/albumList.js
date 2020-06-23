import React from 'react';


const AlbumList = ({albumList}) => {

    const showlist = (albums) => (
        albums ?
            albums.map((item,i)=>(
                <img key={i} alt="" src={`/images/albums/${item.cover}.jpg`}></img>
            ))
        :null
    )

    return(
        <div className="albums_list">
            {showlist(albumList)}
        </div>
    )
}

export default AlbumList;