import React, { Component } from 'react'
import Child from '../Child/Child'
import '../Parent/Parent.css'

export default class Parent extends Component {
  state={
   userName:"Aya",
   userAge:22,
   products:[
    {
      id:0,
      name:"Toshiba",
      price:2000,
      category:"TV",
      onSale:false,
      quantity: 1000,
     },
     {
      id:1,
      name:"IPhone",
      price:6000,
      category:"mobile",
      onSale:true,
      quantity: 100,
     },
     {
      id:2,
      name:"HTC",
      price:4000,
      category:"mobile",
      onSale:false,
      quantity: 10,
     },
     {
      id:3,
      name:"sumsung",
      price:3000,
      category:"mobile",
      onSale:true,
      quantity: 2000,
     }
   ],
  };

  constructor(){
    console.log("hello from constructor");
    super();
  }


 deleteProduct=(id)=>{
// deep copy
let products =[...this.state.products];
// change
products=products.filter((product)=> product.id !== id);
// setState
this.setState({products});
 }

//  // delete using splice
// deleteProduct=(index)=>{
//   let products =[...this.state.products];
//   products.splice(index,1);
//   this.setState({products})
// }


// // update by index
 updateProdct=(product)=>{
// deep copy
let products=[...this.state.products];
// action
let currentIndex=products.indexOf(product);
products[currentIndex].quantity +=1;
// setState
this.setState({products})
 }

// // update by id
// updateProdct=(id)=>{
//   let products=[...this.state.products];
//   products.map((product)=>{
//     if(product.id == id){
//       product.quantity += 1;
//     }
//     return product;
//   });
//   this.setState({products});
// }

// // update by product object
// updateProdct =(index)=>{
//   let products=[...this.state.products];
//   products[index].quantity += 1;
//   this.setState({products});
// }

componentDidMount=()=>{
  console.log("hello from componentDidMount")
}

componentDidUpdate=()=>{
  console.log("hello from componentDidUpdate")
}
  render() {
    console.log("hello from render")
    return (
      
    <>

      <div className="container mt-5 py-3 px-4 rounded-3 bg-color">
        <div className="row">
          {this.state.products.map((product, index)=>(
         <Child key={index} update={this.updateProdct} index={index}delete={this.deleteProduct}testProduct ={product}/>
          ))}
        </div>
      </div>

    </>
    
    )
  }
}
