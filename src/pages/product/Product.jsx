import React, { useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import  * as cdd from "../Cdata/Cdata.jsx"

export const Product = () => {
  const id = useParams().id;
  console.log(id)
  const [img, setImg] = useState(0)
  const [qua, setQua] = useState(1)
  const images = [
    "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4355503/pexels-photo-4355503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const [products,setProducts]=useState([]);
  useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
         // .then(data => console.log(data))
          .then(data=> setProducts(data))
          .catch(error => console.error(error));
  },[])

  function addp(item){
    if(cdd.data.includes(item)){
      item.quantity=qua;
    }
    else{
    if(item.id>0){
      item.quantity=qua
    cdd.data.push(item);}
    }
  }
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={products.image} alt="" onClick={(e) => setImg(0)} />
        </div>
        <div className="mainImage">
          <img src={products.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{products.title}</h1>
        <span className='price'>Rs {products.price * 40}</span>
        <p>{products.description}</p>
        <div className="quantity">
          <button onClick={() => setQua(prev => prev + 1)}>+</button>
         <p>{qua}</p>
          <button onClick={() => setQua((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          </div>
          <button className='add' onClick={addp(products)}>
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
