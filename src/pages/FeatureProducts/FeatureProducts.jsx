import React from 'react'
import {Cards} from '../Cards/Cards'
import './FeatureProducts.scss'

const FeatureProducts = ({type}) => {
    var data=[
        {
            id:1,
            img: "https://images.pexels.com/photos/12675195/pexels-photo-12675195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/192448/pexels-photo-192448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Woman Black Spaghetti Dress ",
            isNew: true,
            oldPrice: 1200,
            price: 800,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4355503/pexels-photo-4355503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Woman Blue Long Sleeve Dress",
            isNew: false,
            oldPrice: 1400,
            price: 700,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3778560/pexels-photo-3778560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Men Black Suit ",
            isNew: true,
            oldPrice: 2200,
            price: 1800,
        }
    ]
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Cards item ={item} key={item.id} /> 
            ))}
        </div>
    </div>
  )
}
export default FeatureProducts;    

