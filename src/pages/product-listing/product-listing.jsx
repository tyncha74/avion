import './product-listing.css'
import catalog from '../../img/catalog/catalog.png'
import {useState} from 'react'

export default function ProductListing() {

    const [counter, setCounter]=useState(1)
    function increment()
    {
        setCounter(counter+1)
    }
    function decrement(){
        if (counter>1){
            setCounter(counter-1)
        }
    }

    return (
        <div className="product-listing">
            <div>
                <div className='on-block'>
                    <img src={catalog} alt="" />
                </div>
                <div className='sol-block'>
                    <h1>The Dandy Chair</h1>
                    <p>£250</p>
                    <h3>Product description</h3>
                    <p>A timeless design, with premium materials
                        features as one of our most popular and iconic pieces.
                        The dandy chair is perfect for any stylish living space w
                        th beech legs and lambskin leather upholstery.
                    </p>
                    <ul>
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                    <h3>Dimensions</h3>
                    <div className='size'>
                        <div>
                            <h1>Height</h1>
                            <p>110cm</p>
                        </div>
                        <div>
                            <h1>Width</h1>
                            <p>75cm</p>
                        </div>
                        <div>
                            <h1>Depth</h1>
                            <p>50cm</p>
                        </div>
                    </div>
                    <div className='counter-block'>
                        <div className='counter-item'>
                            <span>Amount:</span>
                            <div>
                                <button onClick={decrement} >-</button>
                                <p>{counter}</p>
                                <button onClick={increment} >+</button>
                            </div>
                        </div>
                        <div className='counter-button'>

                            <button>Add to cart</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}