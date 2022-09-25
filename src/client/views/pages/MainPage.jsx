import React from "react";
import { Button, Input } from "../components";

import styles from '../../styles/pages/MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.createSection}>
        <p>
          Create a "Room"
        </p>
        <Input label="Type name of room" placeholder="keen.ethics" />
        <Button value="Create" />
      </div>
      <div className={styles.connectSection}>
        <Button value="Room 1" />
        <Button value="Room 2" />
        <Button value="Room 3" />
      </div>
    </div>
  )
};

export default MainPage;
