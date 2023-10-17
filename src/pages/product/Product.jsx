import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {
  const [img, setImg] = useState(0)
  const [qua, setQua] = useState(1)
  const images = [
    "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4355503/pexels-photo-4355503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setImg(1)} />
        </div>
        <div className="mainImage">
          <img src={images[img]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>Rs 1200</span>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="quantity">
          <button onClick={() => setQua(prev => prev + 1)}>+</button>
         <p>{qua}</p>
          <button onClick={() => setQua((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          </div>
          <button className='add'>
          <AddShoppingCartIcon /> Add To Cart
          </button>
          <div className="link">
            <div className="item">
            <FavoriteBorderIcon/> Add To Wishlist
            </div>
          
          <div className="item">
            <BalanceIcon/> Add to compare
          </div>
          </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Type: T-Shirt</span>
          <span>Tags:t-Shirt, Women, Top</span>
          <hr />
        </div>
       
        <div className="details">
          <hr />
          <span>Discription</span>
          <hr />
          <span>Additional Info</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
