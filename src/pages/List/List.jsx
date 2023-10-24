import React,{useState,useEffect} from 'react'
import "./List.scss"
import { Cards } from '../Cards/Cards'
export const List = (prop) => {
    console.log(prop)
    function maxpr(item){
        if(item.price==695){
            return item;
        }
    }
    const cate =["electronics","jewelery","men's clothing","women's clothing"]
    function cat(item){
        if(prop.catId==0){
            return item;
        }
        if(item.category==cate[prop.catId -1] ){
            return item;
        }
    }
   
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
           // .then(data => console.log(data))
            .then(data=> setProducts(data.filter(cat)))
            .catch(error => console.error(error));
    },[])
   
    // function compare( a, b ) {
    //     if ( a.price < b.price){
    //       return -1;
    //     }
    //     if ( a.price > b.price ){
    //       return 1;
    //     }
    //     return 0;
    //   }
    // if(sort=='asc'){
    //     products.sort(compare);
    // }
    // else if(sort=='desc'){
    //     products.sort(compare);
    //     products.reverse();
    // }
  return (
    <div className="list">
       { products.map((item) => <Cards item={item} key={item.id} />)}
    </div>
  )
}
