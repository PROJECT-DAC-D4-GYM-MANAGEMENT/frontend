import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nave from "../../components/nav/nave";
import styles from "./cart.module.css"
import { addProduct } from "../../store/slices/cart";
import { addProductDetails } from "../../store/slices/product";
import axios from "axios";


const Cart=()=>{
  const cart=useSelector((store)=>store.cart.products);
  const productDetails=useSelector(store=>store.details.productDetails)
  const [product,setProduct]=useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{
    setProduct(Object.keys(cart))
  },cart)


  const onPay=()=>{
    sessionStorage.setItem("cart",JSON.stringify(cart));
    sessionStorage.setItem("productDetails",JSON.stringify(productDetails));
    axios.get(`http://localhost:9999/payment/product/${calcTotal()}`).then((res)=>{
    
    
    window.location.href=res.data.data;

 
}).catch((err)=>{

})
  }
  const onIncrease=(id)=>{
    console.log(id)
     const obj={...cart};
     obj[id]=obj[id]+1;
     dispatch(addProduct(obj))
  }

  const onDescrease=(id)=>{
    const obj={...cart};
    
    const obj1={...productDetails}
    if(obj[id]==1) {
        delete obj[id];
        delete obj1[id];
        setProduct(prev=>{
            return prev.filter((a)=>a!=id)
        })

    }
    else {
        obj[id]=obj[id]-1;
    }
    dispatch(addProduct(obj))
    dispatch(addProductDetails(obj1))
  }
  const calcTotal=()=>{
    let total=0;
    for(let a in productDetails){
       total+= (productDetails[a].price*cart[a])
    }
    return total.toFixed(2);
  }

    return (



        
        <div className={styles.main}>
            
             <Nave page={"cart"} />
               <div >
                     {calcTotal() >0 && 
                     <div className={styles.total}>
                        <div className={styles.one}>₹ {calcTotal()}</div>
                        <div className={styles.two} onClick={onPay}>PAY</div>
                     </div>  
                     }
               </div>
             <div className={styles.middle}>
                 {
                    product.map((a)=>{
                        return <div className={styles.wrapper}>  
                                      <div  className={styles.left}>
                                      <div className={styles.img}>
                                        <img src={productDetails[a].images[0] ||
                                             "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700150459_8923890.jpg?w=480&dpr=2.0"}/>
                                      </div>
                                      <div className={styles.name}>{productDetails[a].name}</div>
                                      </div>
                                      <div className={styles.right}>
                                      
                                      <div  className={styles.rightside}>
                                        <div className={styles.first} onClick={()=>onIncrease(a)}>+</div>
                                      <div className={styles.second}>{cart[a]}</div>
                                      <div className={styles.third} onClick={()=>onDescrease(a)}>-</div>
                                      </div>
                                      
                                      <div className={styles.price}> ₹ { (productDetails[a].price * cart[a]).toFixed(2)}</div>
                                      </div>
                                      
                               </div>
                    })
                 }                
             </div>
        </div>
    )
}

export default Cart;




