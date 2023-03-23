import React, { useState, useEffect } from "react";

const Circle = ({ color }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: color,
        display: "inline-block",
        margin: "20px",
      }}
    />
  );
};

const TraficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = ["red", "green", "yellow"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % colors.length);
    },30000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      {colors.map((color, index) => (
        <Circle
          key={index}
          color={index === activeIndex ? color : "gray"}
        />
      ))}
    </div>
  );
};

export default TraficLight;
