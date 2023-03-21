import { createContext } from 'react';

interface IInitialContext {
  rows: number;
  columns: number;
  near: number;
  cells: number[] | string[];
  setRows: (arg: number) => void;
  setColumns: (arg: number) => void;
  setNear: (arg: number) => void;
  setCells: (arg: number[] | string[]) => void;
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
