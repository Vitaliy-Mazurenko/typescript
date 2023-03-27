import React, { useContext, useCallback } from 'react';
import { Context } from '../../../context/context';
import Cell from './Cell';
import CellPercent from './CellPercent';

interface childrenProps {
  incr: (text: React.MouseEvent<HTMLElement>) => void,
  activOn: (e: React.MouseEvent<HTMLElement>) => void,
  activOff: () => void,
  nearest: string | null,
  activ: string,
  percent: number | string,
  cell: object,
  i: string | undefined,
}

const Cells = ({
  incr, activOn, activOff, nearest, activ, percent, cell, i,

}: childrenProps) => {
  const { columns, near, cells } = useContext(Context);

  const cellVal = Object.values(cell);
  const result = cellVal.reduce((sum, elem) => sum + elem, 0);

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
    <>
      {
    Array.from({ length: columns }).map((item, index) => {
      const transparent = Math.round((cellVal[index] / result) * 100);
      const isPercent = percent === `${i}r`;
      return (
        (isPercent) ? (
          <CellPercent
            key={`${i}${index.toString()}`}
            id={`${i}.${index}`}
            index={index}
            transparent={transparent}
          />
        ) : (
          <Cell
            key={`${i}${index.toString()}`}
            incr={incr}
            activOn={activOn}
            activOff={activOff}
            id={`${i}.${index}`}
            className={(classNameActiv(cells, index)) ? (activ) : ''}
            cellValue={cellVal[index]}
          />
        )
      );
    })
    }
    </>
  );
};

export default Cells;
