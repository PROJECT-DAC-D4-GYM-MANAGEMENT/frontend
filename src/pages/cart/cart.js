import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Cart=()=>{
  const cart=useSelector((store)=>store.cart.products);
  const [product,setProduct]=useState([]);

  useEffect(()=>{
    setProduct(Object.keys(cart))
  },cart)


    return (
        <div>
             
        </div>
    )
}

export default Cart;