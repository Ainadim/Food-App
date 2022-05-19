import React from "react";
import { Link } from "react-router-dom";

const AllPosts = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/posts/1"}>Post 01</Link>
        </li>
        <li>
          <Link to={"/posts/2"}>Post 02</Link>
        </li>
        <li>
          <Link to={"/posts/3"}>Post 03</Link>
        </li>
      </ul>
    </div>
  );
};

export default AllPosts;
