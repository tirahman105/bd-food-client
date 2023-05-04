import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../../routes/ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  

  return (
    <Navbar bg="light" className="shadow p-3 mb-5 bg-body rounded" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <span className="brand-color fw-bold">BD</span>{" "}
          <span className="text-success fw-bold">Food</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center align-items-center">
            <ActiveLink className="text-decoration-none text-color fw-bold" to="/">
              Home
            </ActiveLink>
            <ActiveLink to="/blog">
              Blog
            </ActiveLink>

            
          </Nav>
          <div className="text-center">
            {user ? (
              <Nav.Link>
                <button onClick={handleLogOut} className="btn btn-color">
                  Sign Out
                </button>
              </Nav.Link>
            ) : (
              <Link className="btn btn-color" to="/login">
                Sign In
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
