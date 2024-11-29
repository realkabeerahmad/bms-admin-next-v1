import Links from "./links/Links";
import styles from "./navbar.module.css";
const Navbar = ({ logo, links }) => {
  return (
    <nav className={styles.container}>
      <div className={styles?.logo}>{logo.toUpperCase()}</div>
      <div className={styles.links}>
        <Links links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
