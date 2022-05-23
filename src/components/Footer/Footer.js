import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import classes from "./Footer.css";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4">
          <h2>Social Media</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Contact us</h2>
          <p>Street name 1, City</p>
          <p>+569 2698 0256</p>
          <p>email@companyname.com</p>
          <p>email2@companyname.com</p>
        </div>
        <div className="col-md-4">
          <Nav
            className="d-grid footer-nav-item"
            style={{ maxHeight: "100px" }}
          >
            <NavLink to={"/home"} activeClassName={classes.active}>
              <span>Home</span>
            </NavLink>
            <NavLink to={"/about"} activeClassName={classes.active}>
              <span>About</span>
            </NavLink>
            <NavLink to={"/posts"} activeClassName={classes.active}>
              <span>Food</span>
            </NavLink>
            <NavLink to={"/dashboard"} activeClassName={classes.active}>
              <span>Dashboard</span>
            </NavLink>
            <NavLink to={"/dashboard"} activeClassName={classes.active}>
              <span>Log in</span>
            </NavLink>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
