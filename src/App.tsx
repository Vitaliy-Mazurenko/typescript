import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';

const App: React.FC = () => (
  <div className="App" data-testid="App">
    <Router basename="/https://Vitaliy-Mazurenko.github.io/typescript/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  </div>
);

export default App;
