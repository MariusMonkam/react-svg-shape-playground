import React, { useState } from "react";

export default function Circle() {
  const [maxcx, setMaxcx] = useState("");
  const [r, setR] = useState(1);
  const [isOn, setIsOn] = useState(true);
  const [text, setText]= useState('Your Text Here!')
  const [textUpdate, setTextUpdate]=useState(false)

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
const updateText = ()=>{
  setTextUpdate(!textUpdate)
  
}
  return (
    <div>
      <svg className="mysvg" width="500" height="300" viewBox="0 0 500 300" >
      <rect             
              width="500"
              height="300"
              x="0"
              y="0"
              fill="black"
            />
     {/*conditional rendering of  shapes  */}
     
     <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      
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
       
     </pattern>
     <filter id="shadow">
      <feDropShadow dx="0.5" dy="0.8" stdDeviation="0.3"
      floodColor="skyblue"/>
    </filter>
       <text 
       className="mytext"
       x="20"
       y="160"
       width="400"
       height="300"
      textLength="450"
      fontFamily="sans-serif"
      fontSize="60" 
      fontWeight="bold"
      fill="url(#star)" 
      filter="url(#shadow)" 
      onClick={updateText}
   > 
   {text}
  
        </text>
      
        <rect             
              width="300"
              height="100"
              x="0"
              y="0"
              fill="url(#star)"
            />
        <rect             
              width="400"
              height="150"
              x="200"
              y="200"
              fill="url(#star)"
            />
        
      </svg >
      {textUpdate?
      <input 
      type="text"
      placeholder="Your Text Here"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      onMouseLeave={updateText}
      />:
       <div>
       {/*conditional rendering of label between the 2 shapes  */}
       {isOn ? <label>cx:{maxcx}</label> : <label>coord x:{maxcx}</label>}
       <input
         type="range"
         min="0"
         max="500"
         step="1"
         value={maxcx}
         onChange={e => setMaxcx(e.target.value)}
       />
     {/*conditional rendering of label between the 2 shapes  */}
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

    }
     
    </div>
  );
}
