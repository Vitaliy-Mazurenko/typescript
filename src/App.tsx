import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';

const App: React.FC = () => (
  <div className="App" data-testid="App">
    <Home />
  </div>
);

export default App;
