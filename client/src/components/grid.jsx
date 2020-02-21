import React from 'react';
import styles from "./grid.css";

const GridBlock = ({data}) => {
  if (data === 0) {
    return (
      <div className={styles.grid_block_0}></div>
    );
  } else {
    return (
      <div className={styles.grid_block_1}></div>
    );
  }
}

const GridRow = ({gridRowData}) => {
  const gridRowItems = gridRowData.map((item) => {
    return (
      <GridBlock data={item} />
    );
  });

  return (
    <div className={styles.grid_container}>
      {gridRowItems}
    </div>
  );
}

const Grid = ({gridSize, gridData}) => {
  const gridItems = gridData.map((data) => {
    return (
      <div>
        <GridRow gridRowData={data} />
      </div>
    );
  });

  return (
    <div>
        {gridItems}
        <br />
    </div>
  );
}


export default Grid;