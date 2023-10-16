import React from 'react'
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Children</span>
            <span>Footwear</span>
            </div>
            <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            </div>
            <div className="item">
            <h1>About</h1>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            
            </div>
            <div className="item"></div>
        </div>
        <div className="bottom">
            <div className="left">
           <div className="logo">Vonk Retails</div>
           <div className="copyright">All Rights reserve to @letsVonkIT</div>
           </div>
           <div className="right">
            <img src='img/payment.png'></img>
           </div>
        </div>
    </div>
  )
}
