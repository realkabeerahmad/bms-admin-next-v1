"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  // Normalize paths to handle trailing slashes
  const isActive = pathName === link.route || pathName === `${link.route}/`;

  return (
    <Link
      href={link?.route}
      key={link?.id}
      className={isActive ? styles.containerActive : styles.container}
    >
      {link?.title?.toUpperCase()}
    </Link>
  );
};

export default Navlink;
