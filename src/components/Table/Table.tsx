import React from 'react';
import './table.css';
import { useNavigate } from 'react-router-dom';

const Table: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="table-wrap">
      <span id="goBack-btn">
        <button type="button" onClick={() => navigate('/')}>Back</button>
      </span>
      <span>
        <table className="Mtable" aria-label="simple table">
          <tbody>
            <tr>
              <td>Cell</td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </span>
    </div>
  );
};

export default Table;
