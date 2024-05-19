import React from 'react';
import BookInfo from './components/BookInfo';
import Review from './components/Review';
import BandInfo from './components/BandInfo';
import Albums from './components/Albums';
import Recipe from './components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h1>Моя улюблена книга</h1>
        <BookInfo />
        <Review />
      </div>
      <div className="container mt-5 mb-5">
        <h1>Моя улюблена група</h1>
        <BandInfo />
        <Albums />
      </div>
      <div className="container mt-5 mb-5">
      <h1>Мій улюблений рецепт</h1>
      <Recipe />
    </div>
    </div>
  );
};

export default App;
