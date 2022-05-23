import React from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const params = useParams();
  return (
    <div>
      <h1>Food Details {params.foodId} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        laudantium pariatur totam! Impedit, hic harum?
      </p>
    </div>
  );
};

export default Food;
