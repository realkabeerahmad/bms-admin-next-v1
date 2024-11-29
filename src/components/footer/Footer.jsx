import styles from "./footer.module.css";
const Footer = ({ content = "ALL RIGHTS RESERVED | DEVELOPED BY AKA" }) => {
  return <div className={styles.container}>{content}</div>;
};

export default Footer;
