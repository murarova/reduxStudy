import React from "react";
import styles from "../styles.module.css";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={styles.wrapper}>
    <button type="button" onClick={() => onIncrement(step)}>
      Plus
    </button>
    <div>{value} minuts</div>
    <button type="button" onClick={() => onDecrement(step)}>
      Minus
    </button>
  </div>
);

export default Timer;
