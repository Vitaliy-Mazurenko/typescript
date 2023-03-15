import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';

const App: React.FC = () => (
  <div className="App" data-testid="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  </div>
);

export default App;
