import './product-listing.css'
import catalog from '../../img/catalog/catalog.png'
import { useState } from 'react'
import img1 from '../../img/card/img1.png'
import img2 from '../../img/card/img2.png'
import img3 from '../../img/card/img3.png'
import img4 from '../../img/card/img4.png'
import Card from '../../components/card/card';


export default function ProductListing() {

    const [counter, setCounter] = useState(1)
    const [inputValues, setInputValues]=useState('')
    const [data,setData]=useState({
        massage:"",
        user:""
    })
    console.log(data);

    function saveData(){
        setData({
            massage:inputValues,
            user:"mark@gmail.com"
        })
    }
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const allCards = [
        { name: "The Dandy chair", price: 250, img: img1 },
        { name: "Rustic Vase Set", price: 155, img: img2 },
        { name: "The Silky Vase", price: 125, img: img3 },
        { name: "The Lucy Lamp", price: 399, img: img4 },
    ]
    

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
            <div className='section-three'>
                <h1>New ceramics</h1>
                <div className='conteiner'>
                    {
                        allCards.map(item => <Card data={item} />)
                    }


                </div>
                <div className='button'><button>View collection</button></div>
            </div>
            <div className='last-block' style={{width:'100%',height:'100vh'}}>
                <div className='conteiner'>
                    <h1>Join the club and get the benefits</h1>
                    <p>Sign up for our newsletter and receive exclusive
                     offers on new <br />ranges, sales, pop up stores and more</p>
                     <div className='submit-form'>
                        <input  onChange={(e)=>setInputValues(e.target.value)} type="text"  placeholder='your@email.com'/>
                        <button onClick={saveData} >Sing up</button>
                     </div>

                </div>
            </div>
        </div>
    )
}