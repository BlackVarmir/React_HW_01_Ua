import React from 'react';
import AlbumCover from './AlbumCover';

const Albums = () => {
    return (
        <div>
            <h3>Назви альбомів:</h3>
            <ul style={{fontWeight:'bold'}}>
                <li>The Game</li>
                <li>A Night at the Opera</li>
                <li>News of the World</li>
            </ul>
                <AlbumCover />
        </div>
    );
};

export default Albums;