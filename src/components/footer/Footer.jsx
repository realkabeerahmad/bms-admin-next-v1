import styles from "./footer.module.css";
const Footer = ({
  content = "FREE TO USE UNDER MIT LICENSE | DEVELOPED BY KABEER AHMAD",
}) => {
  return <div className={styles.container}>{content}</div>;
};

export default Footer;
