import "./MyNavbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const MyNavbar = () => {
  return (
    <Navbar className="MyNavbar">
      <Nav.Link
        className="MyNavbarLinks"
        href="https://www.facebook.com/hoopdog.eu"
        target={"_blank"}
      >
        <BsFacebook />
      </Nav.Link>

      <Nav.Link className="MyNavbarLinks" href="mailto:info@hoopdog.eu">
        <AiOutlineMail />
      </Nav.Link>
      <Nav.Link className="MyNavbarLinks" href="tel:+48724677778">
        <BsTelephone />
      </Nav.Link>
    </Navbar>
  );
};

export default MyNavbar;
