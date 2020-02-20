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
        <button className={styles.button} onClick={this.props.iterateGrid}>next</button>
      </div>
    );
  }
}

export default Form;