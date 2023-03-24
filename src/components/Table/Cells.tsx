import React, { useContext, useCallback } from 'react';
import { Context } from '../../context/context';

interface childrenProps {
  incr: (text: string) => void,
  activOn: () => void,
  activOff: () => void,
  nearest: string | null,
  activ: string,
  percent: number | string,
  cell: object,
  i: string | undefined,
}
// incr, activOn, activOff, nearest, activ, percent, cell, i,
const Cells: React.FC<childrenProps> = ({
  activOn, activOff, nearest, activ, cell, i,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}): JSX.Element | any => {
  const {
    columns, near, cells,
  } = useContext(Context);

  const cellVal = Object.values(cell);
  // const result = cellVal.reduce((sum, elem) => sum + elem, 0);
  // console.log(result);
  const classNameActiv = useCallback((cells: object[], index: number) => {
    const flatenned = [];
    if (cells[0]) {
      for (let i = 0; i < cells.length - 1; i += 1) {
        flatenned[i] = Object.values(cells[i]);
      }
    }
    return (flatenned.flat().sort((x, y) => Math.abs(Number(nearest) - x)
    - Math.abs(Number(nearest) - y)).slice(0, near)
      .some((currentVal: object) => currentVal === cellVal[index]));
  }, [cellVal, near, nearest]);

  return (
    Array.from({ length: columns }).map((_item, index) => (
      <td
        key={i}
        id={`${i}c${index}`}
        className={(classNameActiv(cells, index)) ? (activ) : ''}
            // onClick={(e) => incr(e.target.id)}
        onMouseEnter={() => activOn}
        onMouseLeave={activOff}
      >
        {cellVal[index]}
      </td>
    ))
  );
};

export default Cells;
