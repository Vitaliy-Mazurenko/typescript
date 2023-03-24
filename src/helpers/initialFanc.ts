import { average } from './average';
import type { IObjType } from './average';

const min = 100;
const max = 999;

export function initialFanc(newRows: number, newColumns: number): IObjType[] {
  const initCells: IObjType[] = [];
  const generateCol = () => {
    const o: IObjType = {};
    for (let i = 0; i < newColumns; i += 1) {
      if (newColumns) {
        o[i] = Math.round(min + Math.random() * (max - min));
      }
    }
    initCells.push(o);
  };
  for (let j = 0; j < newRows; j += 1) {
    generateCol();
  }
  const averageCells = average(initCells);
  return [...initCells, averageCells];
}
