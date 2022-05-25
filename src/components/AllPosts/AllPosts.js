import React from "react";
import "./AllPost.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const AllPosts = () => {
  return (
    <div>
      <div className="food-item-list p-5">
        <ul>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/XXqRjfS/food-item-01.png"
                alt="Fod Item"
              />
              <h4>Set Menu</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className=" item-lists btn btn-success me-2">
              <Link to={"/foods/1"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/SVY3d7c/food-item-02.png"
                alt="Fod Item"
              />
              <h4>Jucy Burger</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/2"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/StHWY8R/food-item-03.png"
                alt="Fod Item"
              />
              <h4>Chicken Nuget</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/3"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/sKfPdvk/food-item-04.png"
                alt="Fod Item"
              />
              <h4>Organic Meal</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/4"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/XXqRjfS/food-item-01.png"
                alt="Fod Item"
              />
              <h4>Set Menu</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/5"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/SVY3d7c/food-item-02.png"
                alt="Fod Item"
              />
              <h4>Jucy Burger</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/6"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/StHWY8R/food-item-03.png"
                alt="Fod Item"
              />
              <h4>Chicken Nuget</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/7"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/sKfPdvk/food-item-04.png"
                alt="Fod Item"
              />
              <h4>Organic Meal</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/8"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/XXqRjfS/food-item-01.png"
                alt="Fod Item"
              />
              <h4>Set Menu</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/9"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/SVY3d7c/food-item-02.png"
                alt="Fod Item"
              />
              <h4>Jucy Burger</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/10"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/StHWY8R/food-item-03.png"
                alt="Fod Item"
              />
              <h4>Chicken Nuget</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/11"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
          <li>
            <div className="food-item-details">
              <img
                width={"200px"}
                height={"170px"}
                src="https://i.ibb.co/sKfPdvk/food-item-04.png"
                alt="Fod Item"
              />
              <h4>Organic Meal</h4>
              <div className="details-info">
                <h2>$15</h2>
                <p>A food is a must for our body.</p>
              </div>
            </div>
            <button className="btn btn-success me-2">
              <Link to={"/foods/12"}>Details</Link>
            </button>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllPosts;
