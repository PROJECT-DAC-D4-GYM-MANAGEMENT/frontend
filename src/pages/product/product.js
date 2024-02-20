import { useEffect, useRef, useState } from "react";
import Nave from "../../components/nav/nave";
import styles from "./product.module.css"
import axios from "axios";
import { config } from "../../config/config";
import ProductPage from "../../components/productpage/productpage";


const Product=()=>{

const [isBottom,setIsBotton]=useState(false);
const ref=useRef();
const [current,setCurrent]=useState(0);
const {jwt}=JSON.parse(sessionStorage.getItem("user"))
const[data,setData]=useState([]);
useEffect(()=>{
 axios.get(`${config.base}product/get/${current}`,{headers:{Authorization:`Bearer ${jwt}`}}).then((res)=>{
    console.log(res.data)
    setData(prev => [...prev,res.data])
 })
},[])



    return(
        <div className={styles.main}>
            <Nave page={"store"} />
             
              <div className={styles.middle}>
                 {
                    data.map((a,index)=>
                    
                         <ProductPage data={a} current={current} index={index}/>
                    )
                 }
              </div>
        </div>
    )
}
export default Product;