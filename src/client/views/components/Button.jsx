import React from "react";

import styles from '../../styles/components/Button.module.scss';

const Button = ({ value, color }) => {
  return (
    <button className={styles.container}>{value}</button>
  )
};

export default Button;
