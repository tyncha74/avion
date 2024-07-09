

import "./card.css"
export default function Card({data}){
    return(
        <div className="card">
            <img src={ data.img} />
            <h1>{data.name}</h1>
            <p> {data.price}</p>

        </div>
    )
}