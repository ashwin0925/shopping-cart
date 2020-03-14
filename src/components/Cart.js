import React from 'react'
import "../style/style.css"

const ItemInfo = (props) => {
  return (
    <>
<div className="cart-list">

  <div className="cart-list-section1 margin-right">
  <img className="cart-image" src={'/static/products/'+props.itemdet.sku +"_2.jpg"} alt="images"/>
  </div>

  <div className="cart-list-section2 margin-right">
  <h4 className="product-name-style">{props.itemdet.title}</h4>
  <h5 className="product-style-style">{props.itemdet.style}</h5>
  </div>

    <div className="cart-list-section3">
      <button className="close-button-gen po" onClick={props.deleteItem}>X</button>
  <h4 className="amount">{"$" + props.itemdet.price}</h4>
    </div>

    <div className="inner_cart">

  </div>

</div>
<hr className="cartline"/>
</>
  )}

export default ItemInfo