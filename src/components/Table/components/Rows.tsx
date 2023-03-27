import React, { useState, useContext } from 'react';
import Cells from './Cells';
import { Context } from '../../../context/context';
import { average } from '../../../helpers/average';
import type IObjType from '../../../types/initData';

interface Props {
  activOn: (e: React.MouseEvent<HTMLElement>) => void,
  activOff: () => void,
  nearest: string | null,
  activ: string,
  cell: object,
  i: string,
}

const Rows = ({
  activOn, activOff, nearest, activ, cell, i,
}: Props) => {
  const {
    cells, setCells,
  } = useContext(Context);
  const [percent, setPercent] = useState('');

  const onDelete = (id: string) => {
    let newCells: IObjType[] = [
      ...cells.slice(0, +id), ...cells.slice(+id + 1),
    ];
    newCells = [...newCells.slice(0, -1)];

    const averageCells: IObjType = average(newCells);
    setCells([...newCells, averageCells]);
  };

  const incr = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const target = e.target as HTMLElement;
    const text: string = target.id;
    const id = text.split('.')[0];
    const incrId = +text.split('.')[1];
    const incrCells = [
      ...cells.slice(+id, +id + 1),
    ];

    const incrItems: IObjType = {};
    function incrRows(cells: object) {
      const cloneCells: IObjType[] = JSON.parse(JSON.stringify(cells));
      if (cloneCells[0]) {
        const column = Object.values(cloneCells[0]);
        for (let i = 0; i < column.length; i += 1) {
          if (i === incrId) {
            cloneCells[0][incrId] += 1;
          }
          incrItems[i] = cloneCells[0][i];
        }
      }
    }
    incrRows(incrCells);

    let newCells: IObjType[] = [
      ...cells.slice(0, +id), incrItems, ...cells.slice(+id + 1),
    ];
    newCells = [...newCells.slice(0, -1)];

    const averageCells: IObjType = average(newCells);
    setCells([...newCells, averageCells]);
  };

  const cellVal = Object.values(cell);
  const result = cellVal.reduce((sum, elem) => sum + elem, 0);

  const flatenned = [];
  if (cells[0]) {
    for (let i = 0; i < cells.length - 1; i += 1) {
      flatenned[i] = Object.values(cells[i]);
    }
  }
  function hoverOn(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    const { id } = target;
    if (id === (`${i}r`)) {
      setPercent(`${i}r`);
    }
  }
  function hoverOff() {
    setPercent('');
  }

  return (
    <tr>
      <Cells
        incr={incr}
        activOn={activOn}
        activOff={activOff}
        nearest={nearest}
        activ={activ}
        percent={percent}
        cell={cell}
        i={i}
      />
      <td
        id={`${i}r`}
        className="tableRes"
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {result}
      </td>
      <td className="tableEnd">
        <button
          type="button"
          className="secondary"
          id={i}
          onClick={() => onDelete(i)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Rows;
