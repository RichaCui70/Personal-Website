import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { pageType } from "@/lib/constants";

import styles from "@/styles/navbar/NavBar.module.css";

export default function MyNavBar({ page }: { page: pageType }) {
  return (
    <Navbar
      position="sticky"
      maxWidth="full"
      className="px-16 bg-secondary"
      classNames={{ wrapper: "p-0" }}
      style={{height: "10vh"}}
    >
      <NavbarBrand>
        <p className={`${styles.navbarTitle} ${styles.navbar}`}>Richard Cui</p>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className={`${styles.navbarItems} ${styles.navbar}`}
      >
        {page === "home" && (
          <>
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
          </>
        )}
        {(page === "home" || page === "blogPage") && (
          <NavbarItem>
            <Link color="foreground" href="/blog">
              Blog
            </Link>
          </NavbarItem>
        )}
        {(page === "blog" || page === "blogPage") && (
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
