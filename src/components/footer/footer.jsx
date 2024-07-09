import "./footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer"> 
        <div className="block-top">
            <div className="box-left"> 
            <ul className="list">
                <li>Menu</li>
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
            </ul>
            <ul className="list">
                <li>Categories</li>
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
            </ul>
            <ul className="list">
                <li>Our company</li>
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
            </ul>
            
            </div>
            <div className="box-right">
               <p>Join our mailing list</p>
               <div>
                <input type="text"  placeholder="your@email.com"/>
                <button>Sign up</button>
               </div>
            </div>
        </div>
        <div className="block-bottom"> 
        <p>Copyright 2022 Avion LTD</p>
        <div>
            <FaLinkedin />
            <FaFacebookSquare/>
            <FaInstagram />
            <FaSkype/>
            <FaTwitter/>
            < FaPinterest/>

        </div>
        
        </div>
        
        </div>
    )
}