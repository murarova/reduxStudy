import React from "react";
import Select from "react-select";
import styles from "../styles.module.css";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" }
];

const StepSelector = ({ onChange, value }) => (
  <Select
    className={styles.select}
    value={value}
    options={options}
    onChange={onChange}
  />
);

export default StepSelector;
