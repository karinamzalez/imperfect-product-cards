import React from 'react';
import './App.css';
import Products from './Products';
import products from './products.json';
import Filters from './Filters';

const App = () => (
  <div className="app">
    <div className="App-row">
      <Filters />
    </div>
    <div className="App-row">
      <Products products={products} />
    </div>
  </div>
);

export default App;
