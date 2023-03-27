import React, { useContext } from 'react';
import { Context } from '../../../context/context';
import { average } from '../../../helpers/average';
import type IObjType from '../../../types/initData';

const min = 100;
const max = 999;

interface childrenProps {
  cell: object,
}

const Footer: React.FC<childrenProps> = ({ cell }): JSX.Element | null => {
  const {
    columns, setCells, cells,
  } = useContext(Context);

  const generateCols = () => {
    let cellsHistory = [...cells];
    const o: IObjType = {};
    for (let i = 0; i < columns; i += 1) {
      o[i] = Math.round(min + Math.random() * (max - min));
    }
    cellsHistory = [...cellsHistory.slice(0, -1), o];

    setCells([...cellsHistory, average(cellsHistory)]);
  };

  const cellVal = Object.values(cell);
  const row = Array.from({ length: columns })
    .map((item, index: number) => <td key={`${index.toString()}`}>{cellVal[index]}</td>);

  const tdStyle = { border: 'none' };

  return cellVal[0] ? (
    <tr>
      {row}
      <td />
      <td className="tableEnd" style={tdStyle}>
        <button className="primary" type="button" onClick={() => generateCols()}>
          Add
        </button>
      </td>
    </tr>
  ) : null;
};

export default Footer;
