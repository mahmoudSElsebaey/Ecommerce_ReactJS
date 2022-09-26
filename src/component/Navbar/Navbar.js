import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarComp({ size }) {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          // bg="primary"
          variant="dark"
          expand={expand}
          className="sticky-top navbarStyle"
          style={{ height: "70px", marginTop: "-20px" }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="nav-logo">
              Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className="text-white"
                style={{ backgroundColor: "orangered" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className="nav-links"> */}
                <Nav>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/categories">
                    Shopping
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>

                {/* <Nav className="justify-content-end flex-grow-1 nav-links"> */}
                <Nav className="justify-content-end flex-grow-1">
                  <div className="shoping-cart-icon">
                    <span>
                      <Nav.Link as={Link} to="/shopingCart">
                        <i className="fas fa-shopping-cart" title="Shopping Cart"></i>
                      </Nav.Link>
                    </span>
                    {size > 0 ? (
                      <span className="count text-white">{size}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <Nav.Link as={Link} to="/login">
                    Sign In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComp;
