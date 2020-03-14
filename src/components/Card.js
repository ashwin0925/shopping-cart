import React from 'react';
import "../style/style.css"
import data from '../data.json'


const Card = (props) => {
  console.log(props,"abc")
  return (
    <div className="card_flex">
     {/* <p>{data.products.length} Product(s) found</p> */}
      {/* {props.data.map (props => { */}
          
          <div className="card">
             

            { (props.isFreeShipping) ? <span className="shipping">Free shipping</span> :""}

            <img className="cartImage" src={`/static/products/${props.sku}_1.jpg`} alt="cart_image"/>

            <p className="cart_Title"> {props.title} </p>
            <hr></hr>

        <small>{props.currencyFormat + props.price}</small>
        <br />

        <small>
          or {props.installments} x{" "}
          {props.currencyFormat +
          (props.price / props.installments).toFixed(2)}
        </small>
        <br />
            <button className="cart_Btn" onClick={()=>props.handle(props)}> Add to cart </button>
          </div>
        
        </div>
  )
  
}

export default Card;
