import React from "react";
import Card from "./components/Card"
import Sidebar from "./components/Sidebar"
import CartInfo from "./components/CartInfo"
import data from './data.json'
import { render } from "react-dom";


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        view:false,
        cartItem:[]
    }
}
handleClick = () => {
  this.setState({
      view:!this.state.view,
  })
}
addToCart = (props) =>{
  console.log(props,"hello world")
  this.setState({
      cartItem:this.state.cartItem.concat(props)
  })
  console.log("new state",this.state.cartItem)
}
deleteEntry = (props)=>{
  console.log("props",props)
  this.setState({
      cartItem: this.state.cartItem.filter(item=> item.sku!==props.sku)
  })
}
render(){
//   console.log(this.state)
return (
  <div className="outer-wrapper">
      <Sidebar />
      <div className="inner-wrapper">
          <div>{data.products.length} Product(s) found </div>
      
      {/* {data.products.map(item => <Card product={item.sku} product_name={item.title} 
      product_price={item.price} installments={item.installments} amountper={(item.price/item.installments).toFixed(2)} />)} */}

          <div className="card-container">
              {data.products.map(item => <Card {...item} handle={this.addToCart}/>)}
          </div>
      </div>
      <CartInfo handleClick={this.handleClick} toggle={this.state.view} cartArray={this.state.cartItem} 
      deleteMethod={this.deleteEntry}/>

  </div>)

}
}

render(<App />, document.getElementById("root"));


