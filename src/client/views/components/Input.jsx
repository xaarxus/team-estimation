import React from "react";

import styles from '../../styles/components/Input.module.scss';

const Input = ({ value, label, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      <label for={label}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        name={label}
        placeholder={placeholder}
      />
    </div>
  )
};

export default Input;
