import React from 'react';
import styles from "./cellularLife.css";

import Grid from "./grid.jsx";
import Form from "./form.jsx";

class CellularLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 10,
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

    data[3][4] = 1;
    data[3][5] = 1;
    data[3][6] = 1;
    data[4][3] = 1;
    data[4][4] = 1;
    data[4][5] = 1;

    this.setState({
      gridData: data
    });
  }

  componentDidMount() {
    this.resetGrid();
  }

  iterateGrid() {
    var data = this.state.gridData;

    for (var i = 0; i < this.state.gridSize; i++) {
      for (var j = 0; j < this.state.gridSize; j++) {
        if ()
      }
    }

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