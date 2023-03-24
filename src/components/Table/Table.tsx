/* eslint-disable react/no-array-index-key */
import React, { useContext, useState, useCallback } from 'react';
import './table.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import Rows from './Rows';

const Table: React.FC = () => {
  const navigate = useNavigate();
  const {
    cells,
  } = useContext(Context);

  const [activ, setActiv] = useState<string>('');
  const [nearest, setNearest] = useState<string | null>('');

  const activOn = useCallback((e: React.ChangeEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const { textContent } = e.target;
    setNearest(textContent);
    setActiv('activ');
  }, [setActiv]);

  const activOff = useCallback(() => {
    setActiv('');
  }, [setActiv]);

  return (
    <div className="table-wrap">
      <span id="goBack-btn">
        <button type="button" onClick={() => navigate('/')}>Back</button>
      </span>
      <span>
        <table className="Mtable" aria-label="simple table">
          <tbody>
            {[...cells.slice(0, -1)].map((cell, i) => (
              <Rows
                key={i}
                activOn={() => activOn}
                activOff={activOff}
                nearest={nearest}
                activ={activ}
                cell={cell}
                i={String(i)}
              />
            ))}
          </tbody>
          {/* <tfoot>
            {[...cells.slice(-1)].map((cell, i) => <Footer key={i} cell={cell} />)}
          </tfoot> */}
        </table>
      </span>
    </div>
  );
};

export default Table;
