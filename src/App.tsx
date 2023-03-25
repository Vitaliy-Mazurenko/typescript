import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';
import { Context } from './context/context';
import type IObjType from './types/initData';

const App: React.FC = () => {
  const [rows, setTableRows] = useState<number>(0);
  const [columns, setTableColumns] = useState<number>(0);
  const [near, setTableNear] = useState<number>(0);
  const [cells, setTableCells] = useState<IObjType[]>([]);

  const setRows = (data: number) => {
    setTableRows(data);
  };

  const setColumns = (data: number) => {
    setTableColumns(data);
  };

  const setNear = (data: number) => {
    setTableNear(data);
  };

  const setCells = (data: IObjType[]) => {
    setTableCells(data);
  };

  const value = useMemo(
    () => ({
      rows,
      columns,
      near,
      cells,
      setRows,
      setColumns,
      setNear,
      setCells,
    }),
    [rows, columns, near, cells],
  );

  return (
    <div className="App" data-testid="App">
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <Context.Provider value={value}>
          <Routes>
            <Route path="/table" element={<Table />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Context.Provider>
      </Router>
    </div>
  );
};

export default App;
