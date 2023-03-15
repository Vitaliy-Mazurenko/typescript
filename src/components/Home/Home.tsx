import React, { useState, useRef } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import type initData from '../../types/initData';

const Home: React.FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [init, setInit] = useState<initData>({
    columns: 5,
    rows: 5,
    near: 5,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    if (ref.current) {
      setInit({
        columns: ref.current.columns.value,
        rows: ref.current.rows.value,
        near: ref.current.near.value,
      });
    }
  };

  const [valueError, setError] = React.useState<string>('');
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((init.columns > 0 && init.columns < 100) && init.rows > 0 && init.near > 0) {
      navigate('/table');
      setInit(init);
      console.log(init.columns);
      setError('');
    } else {
      console.warn('value <= 0');
      console.log(init);
      setError('enter value > 0');
    }
  };

  return (
    <div className="home">
      <div className="creat-wrap">
        <div className="input-wrap">
          <form onSubmit={(e) => handleClick(e)} className="homeForm" ref={ref}>
            <label htmlFor="columns">columns</label>
            <input
              // autoFocus
              id="columns"
              type="number"
              name="columns"
              minLength={1}
              value={init.columns}
              onChange={handleChange}
              required
            />
            <label htmlFor="rows">rows</label>
            <input
              id="rows"
              type="number"
              name="rows"
              minLength={1}
              value={init.rows}
              onChange={handleChange}
              required
            />
            <label htmlFor="near">near</label>
            <input
              id="near"
              type="number"
              name="near"
              value={init.near}
              onChange={handleChange}
              required
            />
            <div>{valueError}</div>
            <button type="button" className="buttonAdd">
              Add New Table
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
