import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import classes from "./Footer.css";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4">
          <h2>Social Media</h2>
        </div>
        <div className="col-md-4">
          <h2>Contact us</h2>
          <p>Street name 1, City</p>
          <p>+569 2698 0256</p>
          <p>email@companyname.com</p>
          <p>email2@companyname.com</p>
        </div>
        <div className="col-md-4">
          <Nav className="nav-item d-grid " style={{ maxHeight: "100px" }}>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
