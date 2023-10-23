import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export const Cart = () => {
    var data=[
        {
            id:1,
            img: "https://images.pexels.com/photos/12675195/pexels-photo-12675195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/192448/pexels-photo-192448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Woman Black Spaghetti Dress ",
            isNew: true,
            oldPrice: 1200,
            price: 800,
            desc:"Black Spaghetti Dress  Black Spaghetti Dress "
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4355503/pexels-photo-4355503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Woman Blue Long Sleeve Dress",
            isNew: false,
            oldPrice: 1400,
            price: 700,
            desc:"Blue Long Sleeve Dress Blue Long Sleeve Dress"
        }
    ]
  return (
    <div className="cart">
        <h1>Products in Cart </h1>
        {data.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">
                        1x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
<div className="total">
    <span>SUBTOTAL</span>
    <span>Rs 123</span>
</div>
<button>Proceed To Checkout</button>
<span className="reset">Reset Cart</span>
    </div>
  )
}
