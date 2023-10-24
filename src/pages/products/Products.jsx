import React, { useState } from 'react'
import "./Products.scss"
import { useParams } from 'react-router-dom'
import { List } from '../List/List'
export const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(1000);
  const [sort,setSort]= useState("")
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
          <input type="checkbox" value={1} id="1" />
          <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" value={2} id="2" />
          <label htmlFor="2">Men</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" value={3} id="3" />
          <label htmlFor="3">Women</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
          <input type="range" min={0} max={1000}  onChange={(e)=> setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort BY</h2>
          <div className="inputItem">
          <input type="radio" name="price" id="asc"  value="asc" onChange={(e)=>setSort("asc")} />
          <label htmlFor="asc">Price(Low To High) </label>
          </div>
          <div className="inputItem">
          <input type="radio" name="price" id="desc"  value="desc" onChange={(e)=>setSort("desc")} />
          <label htmlFor="desc">Price(High To Low) </label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
