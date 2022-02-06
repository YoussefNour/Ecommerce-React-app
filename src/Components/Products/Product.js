import { useState } from "react"


export default function Product({productCard}){
    let[counter,setCounter] = useState(0)

   let increaseCounter=()=>{
     const c = counter+1;
    setCounter(c)
    }


    let decreaseCounter=()=>{
      if(counter >0){
        const c = counter-1
        setCounter(c);
      }
    }

    return(
        <div className="card text-center mb-3">
          <img className="card-img-top" src={productCard.image} alt="productimg"/>
          <div className="card-body">
            <h4 className="card-title">{productCard.title}</h4>
            <p className="card-text">$ {productCard.price}</p>
            <div className="d-flex justify-content-center">
                <input className="btn btn-success btn-sm" onClick={()=>increaseCounter()} type='button' value='+'/>
                <label id="count" className="mx-2">{counter}</label>
                <input className="btn btn-secondary btn-sm" onClick={()=>decreaseCounter()} type='button' value='-'/>
                <button className="btn btn-primary mx-2 btn-sm">Add To Card</button>
            </div>
          </div>
        </div>
    )
}
