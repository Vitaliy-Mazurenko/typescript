import React, { useState, useContext } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

const Home: React.FC = () => {
  const {
    rows, columns, near, setRows, setColumns, setNear,
  } = useContext(Context);
  const [initColumns, setInitColumns] = useState<number>(columns);
  const [initRows, setInitRows] = useState<number>(rows);
  const [initNear, setinitNear] = useState<number>(near);
  const [valueError, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if ((initColumns > 0 && initColumns < 100)
     && (initRows > 0 && initRows < 100)
    && (initNear > 0 && initNear < 100)) {
      navigate('/table');
      setColumns(initColumns);
      setRows(initRows);
      setNear(initNear);
      setError(null);
    } else {
      setError('range from 0 to 100');
    }
  };

  return (
    <div className="home">
      <div className="creat-wrap">
        <div className="input-wrap">
          <form className="homeForm">
            <label htmlFor="columns">columns</label>
            <input
              id="columns"
              type="number"
              name="columns"
              minLength={1}
              value={initColumns}
              onChange={(e) => setInitColumns(+e.target.value)}
              required
            />
            <label htmlFor="rows">rows</label>
            <input
              id="rows"
              type="number"
              name="rows"
              minLength={1}
              value={initRows}
              onChange={(e) => setInitRows(+e.target.value)}
              required
            />
            <label htmlFor="near">near</label>
            <input
              id="near"
              type="number"
              name="near"
              value={initNear}
              onChange={(e) => setinitNear(+e.target.value)}
              required
            />
            <div className="Error">{valueError}</div>
            <button type="button" className="buttonAdd" onClick={(e) => handleClick(e)}>
              Add New Table
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
