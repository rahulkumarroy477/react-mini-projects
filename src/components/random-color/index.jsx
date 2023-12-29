import React, { useState } from 'react'

function RandomColor() {
    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState("#000000");
    function createRandomRgbColor(){
        let newRgb = typeOfColor+"(";
        newRgb += Math.floor(Math.random() * 255)+",";
        newRgb += Math.floor(Math.random() * 255)+",";
        newRgb += Math.floor(Math.random() * 255)+")";
        
        setColor(newRgb);
        console.log(newRgb);
    }
    function createRandomHexColor(){
        const arr = [0,1,2,3,4,5,6,7,"A","B","C","D","E","F"];
        let newHex = "#";
        for(let i = 0;i<6;i++){
            newHex += arr[Math.floor(Math.random() * arr.length)];
        }
        console.log(newHex);
        setColor(newHex);
    }
  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        background:color
    }}>
    <div className="header">
        <button onClick={()=>setTypeOfColor('hex')}>Create Hex color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create Rgb color</button>
        <button onClick={typeOfColor==='hex'?createRandomHexColor:createRandomRgbColor}>Generate Random color</button>
    </div>
    <div style={{width:"250px",color:"white"}}>
        <div>{typeOfColor} value</div>
        <div>{color}</div>

    </div>
    </div>
  )
}

export default RandomColor