import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      {/* <h1>Loading</h1> */}
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
