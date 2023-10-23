import React from 'react'
import "./Cards.scss"
import {Link} from "react-router-dom"

export const Cards = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={item.image} alt=""  className='mainImg'/>
                <img src={item.image} alt="" className='secondImg' />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>{item.oldPrice}</h3>
                <h3>{item.price}</h3>
            </div>
        </div>
    </Link>
  )
}