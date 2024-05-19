// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


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
