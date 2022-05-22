import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <div className="row d-flex align-items-center">
        <div className="col-md-2">
          <div className="header-logo">
            <img
              src="https://i.ibb.co/74dGGPg/Arafinix-logo-02.png"
              alt="Arafinx Logo"
            />
          </div>
        </div>
        <div className="col-md-10">
          <Navbar className="d-grid justify-content-end" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"> </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="my-2 my-lg-0 nav-item"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavLink to={"/home"} activeClassName={classes.active}>
                    Home
                  </NavLink>
                  <NavLink to={"/about"} activeClassName={classes.active}>
                    About
                  </NavLink>
                  <NavLink to={"/posts"} activeClassName={classes.active}>
                    Food
                  </NavLink>
                  <NavLink to={"/dashboard"} activeClassName={classes.active}>
                    Dashboard
                  </NavLink>
                  <NavLink to={"/dashboard"} activeClassName={classes.active}>
                    Log in
                  </NavLink>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
