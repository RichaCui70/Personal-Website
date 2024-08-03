import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MyNavBar() {
  return (
    <Navbar
      position="sticky"
      maxWidth="full"
      className="px-16 bg-secondary"
      classNames={{ wrapper: "p-0" }}
    >
      <NavbarBrand>
        <p className="navbar navbar-title">Richard Cui</p>
      </NavbarBrand>
      <NavbarContent justify="end" className="navbar navbar-items">
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
