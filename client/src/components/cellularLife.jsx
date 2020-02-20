import React from 'react';
import styles from "./cellularLife.css";

class CellularLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.global}>
        Hi.
      </div>
    );
  }
}


export default CellularLife;