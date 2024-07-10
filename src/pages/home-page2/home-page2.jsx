

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './home-page2.css'
import {useState} from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { LuSprout } from 'react-icons/lu';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';





export default function HomePage2 ()
{
    const [modal, setModal]= useState(false)
    const toggleModal =()=>{
        setModal(!modal)
    }

    return(
        <div> 
       <div className="home-page2"> 
       <button onClick={toggleModal} className='modal-btn'> otkryt okno</button>
        {
            modal ? (
                <div className='conteiner-modal' onClick={toggleModal}> 
                <div className='modal'>
                    <IoCloseOutline onClick={toggleModal} size={30} className='close-btn'/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nesciunt!
                </div>
                
                </div>

            ) : ''
        }</div>
         <div className='two'>
                <h1>What makes our brand different</h1>

                <div className='section-two'>
                    <div  style={{backgroundColor:"#f9f9f9", padding:"30px"}} className='block-one'>
                        <TbTruckDelivery size={30} />
                        <h2>Next day as standard</h2>
                        <p>Order before 3pm and get your order
                            the next day as standard</p>
                    </div>
                    <div  style={{backgroundColor:"#f9f9f9", padding:"30px"}} className='block-one'>
                        <IoIosCheckmarkCircleOutline size={30} />
                        <h2>Made by true artisans</h2>
                        <p>Handmade crafted goods made with
                            real passion and craftmanship</p>
                    </div>
                    <div  style={{backgroundColor:"#f9f9f9", padding:"30px"}} className='block-one'>
                        <MdOutlineFeaturedPlayList size={30} />
                        <h2>Unbeatable prices</h2>
                        <p>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div  style={{backgroundColor:"#f9f9f9", padding:"30px"}} className='block-one'>
                        <LuSprout size={30} />
                        <h2>Recycled packaging</h2>
                        <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>

        </div>
        </div>

    )
}