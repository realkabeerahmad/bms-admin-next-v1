import React from "react";
import styles from "./bubble.module.css";

const Bubble = ({ size = 50, top = 0, left = 0, content = "" }) => {
  return (
    <div
      className={styles.bubble}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Bubble;
