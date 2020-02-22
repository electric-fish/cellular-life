import React from 'react';
import styles from "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          <button className={styles.button} onClick={this.props.resetGrid}>reset</button>
          &nbsp;
          <button className={styles.button} onClick={this.props.iterateGrid}>next</button>
        </div>
        <p />
        <div>
          <label>Form: </label>
          <select id="startOptions" className={styles.select} onChange={this.props.switchGrid}>
            <option value="0">Toad</option>
            <option value="1">Blinker</option>
            <option value="2">Beacon</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Form;