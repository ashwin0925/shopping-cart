import React from "react"
import bag from "../bag-icon.png"
import ItemInfo from "./Cart"

function CartInfo(props) {
  return (
    <div>

      <div>
      <button className="pos-fix" onClick={props.handleClick}><img src={bag}/></button>
    </div>

    <div className={props.toggle?"cart-outer":"display-none"}>
      
      <div className="close">
        <span className="cross"><button className="close-btn" onClick={props.handleClick}>X</button></span>
      </div>

      <div className="top-cart-container">
        <div className="cart-icon">
          <img src={bag}></img>
          <span className="cart-text">Cart</span>
        </div>

        <div className="cart-inner-container">
          {props.cartArray.map((item, id)=>{
            console.log(item)
            return(<ItemInfo key={item.id} deleteItem={() => props.deleteMethod(item)} itemdet={item}/>)
          })}
        </div>

      </div>
    </div>
    </div>
  )
}

export default CartInfo