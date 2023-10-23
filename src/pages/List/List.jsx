import React,{useState,useEffect} from 'react'
import "./List.scss"
import { Cards } from '../Cards/Cards'
export const List = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
           // .then(data => console.log(data))
            .then(data=> setProducts(data))
            .catch(error => console.error(error));
    },[])
  return (
    <div className="list">
       { products.map((item) => <Cards item={item} key={item.id} />)}
    </div>
  )
}
