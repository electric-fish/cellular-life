import React from 'react';
import styles from "./cellularLife.css";

import Grid from "./grid.jsx";

class CellularLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 20,
      gridData: []
    }
    this.resetGrid = this.resetGrid.bind(this);
  }

  resetGrid() {
    var data = Array(this.state.gridSize).fill(Array(this.state.gridSize).fill(0));
    console.log(data);
    this.setState({
      gridData: data
    });
  }

  componentDidMount() {
    this.resetGrid();
  }

  render() {
    return (
      <div className={styles.global}>
        <h1 className={styles.header}>Life</h1>
        <Grid />
      </div>
    );
  }
}


export default CellularLife;