import React, { Component } from 'react'
import '../Child/Child.css'

export default class Child extends Component {
  componentWillUnmount=()=>{
    console.log("hello from componentWillUnmount")
  }
  render() {
   let {name ,price ,category ,quantity ,id ,onSale }=this.props.testProduct
    return (
      <>
      <div className="col-md-3 my-3">
      <div className="bg-color2 p-3 position-relative">
      <h6 className='text-white' style={{marginTop: "30px"}}><span className='text-danger'>productName:</span> {name}</h6>
      <h6 className='text-white'><span className='text-danger'>price:</span> {price}</h6>
      <h6 className='text-white'><span className='text-danger'>category:</span> {category}</h6>
      <h6 className='text-white'><span className='text-danger'>quantity:</span> {quantity}</h6>
      <h6 className='text-white'><span className='text-danger'>id:</span> {id}</h6>
      <button className='btn btn-success w-100 mb-2 mt-3' onClick={()=>this.props.update(this.props.testProduct)}>increase Quantity</button>
      {/* <button className='btn btn-success w-100 mb-2 mt-3' onClick={()=>this.props.update(id)}>increase Quantity</button> */}
      {/* <button className='btn btn-success w-100 mb-2 mt-3' onClick={()=>this.props.update(this.props.index)}>increase Quantity</button> */}
      <button className='btn btn-danger w-100' onClick={()=>this.props.delete(id)}>Delete</button>
      {/* <button className='btn btn-danger w-100' onClick={()=>this.props.delete(this.props.index)}>Delete</button> */}
      {onSale?<div className='sale bg-primary p-1 text-white position-absolute top-0 end-0'> onSale</div>:''}
      
      </div>
      </div>
      
      
      </>
    )
  }
}
