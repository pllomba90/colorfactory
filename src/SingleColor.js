import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const SingleColor = ({ colors }) => {
  const { name } = useParams();

  const selectedColor = colors.find((color) => color.name === name);
  
  useEffect(() => {
    if (!selectedColor) {
      return <Navigate to="/colors" />;
    }
  }, [selectedColor]);

  const backgroundStyle = selectedColor
    ? {
        backgroundColor: selectedColor.rgb,
      }
    : {};

  return (
 
    <div className="singleColor"  style={backgroundStyle}>
      {selectedColor ? (
        <>
          <h1>{selectedColor.name}</h1>
          <Link to="/colors">Back to the list!</Link>
        </>
      ) : (
        <p>Color not found</p>
      )}
    </div>
   
  );
};

export default SingleColor;

