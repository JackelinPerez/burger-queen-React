import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Cards} from './components/cards'

function App() {
  return (
    <div className="App">
      <Cards id='0'></Cards>
    </div>
  );
}

export default App;
