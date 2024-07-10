import './header.css'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {


    const[menuActive, setMenuActive] = useState (false)

    const toggleMenu =()=>{
        setMenuActive(! menuActive)
    }

    return (
        <div>
            <div className='header-top'>
                <CiSearch />
                <h1>Avion</h1>
                <div className='header-icons'>
                    <SlBasket />
                    <FaRegUser />
                    < GiHamburgerMenu  onClick ={ toggleMenu} className='burger-menu'/>
                    
                </div>

            </div>
            <div className={`header-bottom ${menuActive ? 'active' : ''}`}>
                <NavLink to="/" className='Link'> Glavnaya</NavLink>
                <NavLink  to="page-two" className='Link'>Glavnaya2</NavLink>
                <NavLink to="product-listing" className='Link'>Katalog</NavLink>
                <NavLink  to="product-listing-two" className='Link'>Katalog 2</NavLink>
            </div>
           
        </div>
    )
}