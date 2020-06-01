import React, { useState } from "react";

export default function Circle() {
  const [maxcx, setMaxcx] = useState("");
  const [r, setR] = useState(1);
  const [isOn, setIsOn] = useState(true);

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
    <>
      <svg className="mysvg" width="500" height="400">
        {[...Array(500)].map((_, i) =>
          isOn ? (
            <circle
              key={i}
              cx={randomRangeInt(0, maxcx)}
              cy={randomRangeInt(0, 400)}
              r={randomRangeInt(1, r)}
              fill={getRandomColor()}
            />
          ) : (
            <rect
              key={i}
              width={400}
              height={r}
              x={randomRangeInt(0, maxcx)}
              y={randomRangeInt(0, 400)}
              fill={getRandomColor()}
            />
          )
        )}
      </svg>
      <div>
        {isOn ? <label>cx:{maxcx}</label> : <label>coord x:{maxcx}</label>}
        <input
          type="range"
          min="0"
          max="500"
          step="1"
          value={maxcx}
          onChange={e => setMaxcx(e.target.value)}
        />
        {}
        {isOn ? <label>radius:{r}</label> : <label>Height:{r}</label>}
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={r}
          onChange={e => setR(e.target.value)}
        />
        <button onClick={() => setIsOn(!isOn)}>Switch Shape</button>
      </div>
    </>
  );
}
