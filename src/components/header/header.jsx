import './header.css'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <div className='header-top'>
                <CiSearch />
                <h1>Avion</h1>
                <div className='header-icons'>
                    <SlBasket />
                    <FaRegUser />
                    
                </div>

            </div>
            <div className='header-bottom'>
                <NavLink to="/" className='Link'> Glavnaya</NavLink>
                <NavLink  to="page-two" className='Link'>Glavnaya2</NavLink>
                <NavLink to="product-listing" className='Link'>Katalog</NavLink>
                <NavLink  to="product-listing-two" className='Link'>Katalog 2</NavLink>
            </div>
           
        </div>
    )
}