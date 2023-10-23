import React, { useEffect, useState } from 'react'
import {Cards} from '../Cards/Cards'
import './FeatureProducts.scss'

const FeatureProducts = ({type}) => {
    
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
           // .then(data => console.log(data))
            .then(data=> setProducts(data.filter(four)))
            .catch(error => console.error(error));
    },[])
    function four(item){
        if(item.id<=5){
            return item;
        }
    }
    //setProducts(products.filter(four))
    console.log("data")
    console.log(products)
    
    
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.</p>
        </div>
        <div className="bottom">
            {products.map(item=>(
                <Cards item ={item} key={item.id} /> 
            ))}
        </div>
    </div>
  )
}
export default FeatureProducts;    

