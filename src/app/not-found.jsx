import Link from "next/link";
import styles from "./styles/not-found.module.css";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{"404 | Not Found".toUpperCase()}</h2>
      <p className={styles.paragraph}>
        {"It seems that you are lost".toUpperCase()}
      </p>
      <Link href="/" className={styles.link}>
        {"Back to Home".toUpperCase()}
      </Link>
    </div>
  );
};

export default NotFound;
