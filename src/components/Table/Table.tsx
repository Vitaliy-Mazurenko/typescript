import React, { useContext } from 'react';
import './table.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

const Table: React.FC = () => {
  const navigate = useNavigate();
  const {
    rows, columns, near,
  } = useContext(Context);

  return (
    <div className="table-wrap">
      <span id="goBack-btn">
        <button type="button" onClick={() => navigate('/')}>Back</button>
      </span>
      <span>
        <table className="Mtable" aria-label="simple table">
          <tbody>
            <tr>
              <td>{rows}</td>
              <td>{columns}</td>
              <td>{near}</td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </span>
    </div>
  );
};

export default Table;
