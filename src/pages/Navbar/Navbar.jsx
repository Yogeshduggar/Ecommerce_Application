import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Cart } from '../Cart/Cart';
export const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                <img src='img/flag.png'></img>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
                <Link className="link"  to={"/Products/1"}>Men</Link>
            </div>
            <div className='item'>
                <Link className="link" to={"/Products/2"}>Women</Link>
            </div><div className='item'>
                <Link className="link" to={"/Products/3"}>Children</Link>
            </div>
            </div>
            <div className='center'>
                <Link className="link" to="/">Vonk Retails</Link>
            </div>
            <div className='right'>
                <div className="item">
                <Link className="link" to="/">Home</Link>
                </div>
                <div className="item">
                <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icon">
                    <SearchIcon/>
                    <PersonIcon/>
                    <FavoriteBorderIcon/>
                    <div className="carticon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
           
        </div>
        {open && <Cart/>}
    </div>
  )
}
