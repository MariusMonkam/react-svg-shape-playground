import React,{useState} from "react";

export default function Circle() {
  const [maxcx,setMaxcx]=useState('');
  const [r,setR]=useState(1);


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
      {[...Array(500)].map((_, i) => (
        <circle
          key={i}
          cx={randomRangeInt(0, maxcx)}
          cy={randomRangeInt(0, 400)}
          r={randomRangeInt(1, r)}
          fill={getRandomColor()}
        />
      ))}
    </svg>
    <div>
      <label>cx:{maxcx}</label>
      <input type="range" min="0" max="500" step="1"
       value={maxcx} 
       onChange={(e)=> setMaxcx(e.target.value)}/>{  }
        <label>radius:{r}</label>
       <input type="range" min="1" max="100" step="1"
       value={r} 
       onChange={(e)=> setR(e.target.value)}/>
    </div>
    </>
    
  );
}
