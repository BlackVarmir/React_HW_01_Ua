import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlbumCover = () => {
    return (
        <div>
            <h3 class="mb-4">Обкладинки альбомів:</h3>
            <img src="/src/components/img/album-cover/the-game.jpg" alt="The Game" />
            <img src="/src/components/img/album-cover/a-night-at-the-opera.jpg" alt="A Night At The Opera" />
            <img src="/src/components/img/album-cover/news-of-the-world.jpg" alt="News Of The World" />
        </div>
    );
};

export default AlbumCover;