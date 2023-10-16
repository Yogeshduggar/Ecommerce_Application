import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"

 const Slider = () => {
    const [CurrentSlide, SetCurrentSlide]= useState(0);
    const data=[
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
   
    let prev=()=>{
        SetCurrentSlide(CurrentSlide=== 0 ? 2: (pre)=> pre-1);
    }
    let fwd=()=>{
        SetCurrentSlide(CurrentSlide === 2 ? 0: (pre)=> pre+1);
    }
  return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${CurrentSlide*100}vw)`}}>
            
            <img className='img' src={data[0]}/>
            <img className='img' src={data[1]}/>
            <img className='img' src={data[2]}/>
            
        </div>
        <div className="icon">
            <button onClick={prev}> <WestOutlinedIcon/> </button>
            <button onClick={fwd}><EastOutlinedIcon/></button>
        
        </div>
    </div>
  )
}
export default Slider