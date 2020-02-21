import React from 'react';
import styles from "./grid.css";

const GridBlock = ({data}) => {
  return (
    <span>{data} </span>
  );
}

const GridRow = ({gridRowData}) => {
  const gridRowItems = gridRowData.map((item) => {
    return (
      <GridBlock data={item} />
    );
  });

  return (
    <li>
      {gridRowItems}
    </li>
  );
}

const Grid = ({gridSize, gridData}) => {
  // console.log(gridData);
  const gridItems = gridData.map((data) => {
    return (
      <GridRow gridRowData={data} />
    );
  });

  return (
    <ul>
      {gridItems}
    </ul>
  );
}


export default Grid;