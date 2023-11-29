import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div className="colorList">
      <h1>ColorList</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a Color!</Link>
    </div>
  );
};

export default ColorList;
