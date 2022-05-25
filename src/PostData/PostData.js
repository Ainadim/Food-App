import React from "react";
import "./PostData.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const PostData = (props) => {
  const { company_name, ceo_full_name, country, price, images } = props.allData;
  return (
    <div>
      <div className="food-item-list">
        <ul>
          <li>
            <div className="food-item-details">
              <img
                width={"380px"}
                height={"220px"}
                src={images}
                alt="Fod Item"
              />
              <h4>{company_name}</h4>
              <div className="details-info">
                <h2>${price}</h2>
                <p>Cheif Name: {ceo_full_name}</p>
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
                width={"380px"}
                height={"220px"}
                src={images}
                alt="Fod Item"
              />
              <h4>{company_name}</h4>
              <div className="details-info">
                <h2>${price}</h2>
                <p>Cheif Name: {ceo_full_name}</p>
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
                width={"380px"}
                height={"220px"}
                src={images}
                alt="Fod Item"
              />
              <h4>{company_name}</h4>
              <div className="details-info">
                <h2>${price}</h2>
                <p>Cheif Name: {ceo_full_name}</p>
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
                width={"380px"}
                height={"220px"}
                src={images}
                alt="Fod Item"
              />
              <h4>{company_name}</h4>
              <div className="details-info">
                <h2>${price}</h2>
                <p>Cheif Name: {ceo_full_name}</p>
              </div>
            </div>
            <button className=" item-lists btn btn-success me-2">
              <Link to={"/foods/1"}>Details</Link>
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

export default PostData;
