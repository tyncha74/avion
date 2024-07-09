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
                <NavLink className='Link'> Glavnaya</NavLink>
                <NavLink className='Link'>Glavnaya2</NavLink>
                <NavLink className='Link'>Katalog</NavLink>
                <NavLink className='Link'>Katalog 2</NavLink>
            </div>
           
        </div>
    )
}