import React from 'react';

interface childrenProps {
  id: string | undefined,
  transparent: number,
}
const color = `red ${`${1}%`}`;

const CellPercent: React.FC<childrenProps> = ({
  id, transparent,
}): JSX.Element => (
  <td
    id={id}
    style={{ background: `linear-gradient(to bottom, Transparent ${100 - transparent}%, ${color})` }}
    role="gridcell"
  >
    {`${transparent}%`}
  </td>
);

export default CellPercent;
