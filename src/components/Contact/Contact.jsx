import React, { Component } from 'react'

export default class Contact extends Component {
    state={
        quantity:0
    }
  handleUpdate = ()=>{
    let quantity = this.state.quantity;
    quantity ++;
    this.setState({quantity});
  }
  render() {
    return (
      
        <>
        <h2 className='text-center mb-4'>Hello from Contact</h2>
        <h5>quantity: {this.state.quantity}</h5>
        <button className='btn btn-success mt-4' onClick={()=>this.handleUpdate()}>increase Quantity</button>
        </>
    )
  }
}
