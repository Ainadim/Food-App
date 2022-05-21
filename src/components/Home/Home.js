import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Outlet />
      <div className="all-products-slider">
        <Carousel fade>
          <Carousel.Item className="carousel-item">
            <img src="https://i.ibb.co/z8ydzQm/Food-01.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.ibb.co/1spN1JD/Food-02.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/Bfz02jG/Food-03.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="all-products pt-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-success">
              <h4>New in Town</h4>
            </button>
            <div className="new-in-town pt-5 d-grid">
              <img src="https://i.ibb.co/LYwGMsf/burger-01.png" alt="" />
              <h1>Burger</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur id eos aspernatur aliquid voluptate quod hic maiores
                est labore placeat.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h1>Our Item </h1>
            <div className="item-list mt-5 pt-5">
              <ul>
                <li>
                  <img
                    width={"200px"}
                    height={"170px"}
                    src="https://i.ibb.co/XXqRjfS/food-item-01.png"
                    alt="Fod Item"
                  />
                  <h4>Set Menu</h4>
                  <h2>$15</h2>
                  <button className="btn btn-success">Details</button>
                </li>
                <li>
                  <img
                    width={"200px"}
                    height={"170px"}
                    src="https://i.ibb.co/SVY3d7c/food-item-02.png"
                    alt="Fod Item"
                  />
                  <h4>Jucy Burger</h4>
                  <h2>$25</h2>
                  <button className="btn btn-success">Details</button>
                </li>
                <li>
                  <img
                    width={"200px"}
                    height={"170px"}
                    src="https://i.ibb.co/StHWY8R/food-item-03.png"
                    alt="Fod Item"
                  />
                  <h4>Chicken Nuget</h4>
                  <h2>$19</h2>
                  <button className="btn btn-success">Details</button>
                </li>
                <li>
                  <img
                    width={"200px"}
                    height={"170px"}
                    src="https://i.ibb.co/sKfPdvk/food-item-04.png"
                    alt="Fod Item"
                  />
                  <h4>Organic Meal</h4>
                  <h2>$33</h2>
                  <button className="btn btn-success">Details</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
