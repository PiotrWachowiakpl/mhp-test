import "./MyFooter.css";
import { Row, Col, Container, Nav, Navbar, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer id="MyFooter">
      <Navbar expand="lg" className="justify-content-center ">
        <Container className="d-inline">
          <Row style={{}}>
            <Col xs={12} style={{ fontSize: "14px" }}>
              <h5>Skontaktuj się z nami</h5>

              <div className="">
                Hoop Dog
                <br />
                Zdrój 28K
                <br />
                62-065 Grodzisk Wlkp
              </div>
              <br />

              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2487255873266!2d16.3260115!3d52.220698799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705cd05056e2595%3A0x3c7f96797e4411f7!2zWmRyw7NqIDI4SywgNjItMDY1IFpkcsOzag!5e0!3m2!1spl!2spl!4v1653400094289!5m2!1spl!2spl"
              ></iframe>
              <Nav.Link className="NavLink" href="mailto:info@hoopdog.eu">
                info@hoopdog.eu
              </Nav.Link>
              <Nav.Link className="NavLink" href="tel:+48724677778">
                +48 724 677 778
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};
export default MyFooter;
