import React, { useEffect, useState } from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import  * as cdd from "../Cdata/Cdata.jsx"
export const Cart = () => {

   // const [data,setData]=useState(cdd.data)
    var data =cdd.data
    var total=0
    {data.map(item=>(
        total=total+item.price*item.quantity
    ))}

    function removed(item){
        cdd.data.pop(item)        
        //setData(data.pop(item))
    }
  return (
    <div className="cart">
        <h1>Products in Cart </h1>
        {data.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="price">
                        {item.quantity}x ${item.price}
                    </div>
                </div>
                <button onClick={removed(item)}><DeleteOutlinedIcon className='delete'/></button>
                
            </div>
            
        ))}
<div className="total">
    <span>SUBTOTAL</span>
    <span>Rs {total*40}</span>
</div>
<button>Proceed To Checkout</button>
<span className="reset">Reset Cart</span>
    </div>
  )
}
