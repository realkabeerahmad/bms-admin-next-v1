import Links from "./links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  const links = [
    { id: "1", route: "/", title: "Home" },
    { id: "2", route: "/contact", title: "Contact" },
    { id: "3", route: "/admin", title: "admin" },
    { id: "4", route: "/login", title: "login" },
    { id: "5", route: "/register", title: "register" },
  ];
  return (
    <nav className={styles.container}>
      <div className={styles?.logo}>LOGO</div>
      <div className={styles.links}>
        <Links links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
