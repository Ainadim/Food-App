import React from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const params = useParams();
  return (
    <div>
      <h1>Food Description</h1>
      <p>Food Id is {params.foodId}</p>
    </div>
  );
};

export default Food;
