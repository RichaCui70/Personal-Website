import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import styles from "@/styles/navbar/NavBar.module.css"

export default function MyNavBar() {
  return (
    <Navbar
      position="sticky"
      maxWidth="full"
      className="px-16 bg-secondary"
      classNames={{ wrapper: "p-0" }}
    >
      <NavbarBrand>
        <p className={`${styles.navbarTitle} ${styles.navbar}`}>Richard Cui</p>
      </NavbarBrand>
      <NavbarContent justify="end" className={`${styles.navbarItems} ${styles.navbar}`}>
        <NavbarItem>
          <Link color="foreground" href="#">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
