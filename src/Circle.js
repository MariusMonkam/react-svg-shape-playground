import React from "react";

export default function Circle() {
  //function random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // random position
  function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <svg className="mysvg" width="500" height="400">
      {[...Array(100)].map((_, i) => (
        <circle
          key={i}
          cx={randomRangeInt(0, 500)}
          cy={randomRangeInt(0, 400)}
          r={randomRangeInt(0, 20)}
          fill={getRandomColor()}
        />
      ))}
    </svg>
  );
}
