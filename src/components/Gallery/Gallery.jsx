
// stateless component
// hooks

import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react"

export default function Gallery(){
    let [quantity,setQuantity]=useState(0);
    let[age,setAge]=useState(10);
    function updateAge(){
        setAge(age + 1);
    }
    function updateQuantity(){
        setQuantity(Math.random());
    }
    // mounting
    useEffect( ()=>{
        // call API
        console.log("hello from component DidMounting")
    }, []);

    // update
    // useEffect(()=>{
    //     if(quantity == 0 && age == 10)
    //     return;
    //     console.log("hello from component did updated");
    // },[quantity,age]);

    // willunmount
    // useEffect(()=> {
    //     let timer = setInterval(()=>{
    //         console.log("helo")
    //     },1500);
    //     return ()=> {
    //         clearInterval(timer);
    //         console.log("hello from will un mounting")
    //     }
    // },[])

    return(
        
        <>
        <h2 className="text-center mb-3">Hello from Gallery</h2>
        <h5>quantity: {quantity}</h5>
        <h5>age: {age}</h5>
        <button className='btn btn-danger mt-2' onClick={()=>updateQuantity()}>increase Quantity</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={()=>updateAge()}>increase Age</button>
        </>
    )
}