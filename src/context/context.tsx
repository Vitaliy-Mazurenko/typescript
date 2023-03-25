import { createContext } from 'react';
import type IObjType from '../types/initData';

interface IInitialContext {
  rows: number;
  columns: number;
  near: number;
  cells: IObjType[];
  setRows: (arg: number) => void;
  setColumns: (arg: number) => void;
  setNear: (arg: number) => void;
  setCells: (arg: IObjType[]) => void;
}

export const Context = createContext<IInitialContext>({
  rows: 5,
  columns: 5,
  near: 5,
  cells: [],
  setRows: () => {},
  setColumns: () => {},
  setNear: () => {},
  setCells: () => {},
});
