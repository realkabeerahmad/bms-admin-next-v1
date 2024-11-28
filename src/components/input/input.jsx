import React from "react";
import styles from "./input.module.css";

const Input = ({ field }) => {
  return (
    <div key={field.id} className={styles.container}>
      <label htmlFor={field.id} className={styles.label}>
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        placeholder={field.placeholder?.toUpperCase()}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
