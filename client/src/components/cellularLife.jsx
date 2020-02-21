import React from 'react';
import styles from "./cellularLife.css";

import Grid from "./grid.jsx";
import Form from "./form.jsx";

import { gridFunctions } from "./gridFunctions.jsx";

class CellularLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 4,
      gridData: []
    }
    this.resetGrid = this.resetGrid.bind(this);
    this.iterateGrid = this.iterateGrid.bind(this);
  }

  resetGrid() {
    var data = [];

    for (var i = 0; i < this.state.gridSize; i++) {
      var rowData = [];
      for (var j = 0; j < this.state.gridSize; j++) {
        rowData.push(0);
      }
      data.push(rowData);
    }

    // data[1][1] = 1;
    // data[1][2] = 1;
    // data[1][3] = 1;
    // data[2][0] = 1;
    // data[2][1] = 1;
    // data[2][2] = 1;

    data[0][0] = 1;
    data[0][1] = 1;
    data[1][0] = 1;
    data[2][3] = 1;
    data[3][2] = 1;
    data[3][3] = 1;

    this.setState({
      gridData: data
    });
  }

  componentDidMount() {
    this.resetGrid();
  }

  iterateGrid() {
    var data = gridFunctions.iterateGrid(this.state.gridSize, this.state.gridData);
    this.setState({
      gridData: data
    });
  }

  render() {
    return (
      <div className={styles.global}>
        <h1 className={styles.header}>Life</h1>
        <Grid gridSize={this.state.gridSize} gridData={this.state.gridData} />
        <Form iterateGrid={this.iterateGrid} />
      </div>
    );
  }
}

export default CellularLife;