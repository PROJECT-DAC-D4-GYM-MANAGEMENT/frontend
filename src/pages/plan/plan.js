import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useEffect, useRef, useState } from "react";
import { config } from "../../config/config";
import axios from "axios";
import styles from "./plan.module.css"
import { motion, useAnimation, useInView } from "framer-motion";
import Pcard from "../../components/PlanCrad/pcrad";
import Nave from "../../components/nav/nave";
// import { useHistory } from 'react-router-dom'

const Plan=()=>{

const [load,setLoad]=useState(true);
const [plan,setPlan]=useState([]);
const ref=useRef(null);
const [show ,setShow]=useState(0);


const onCancel=()=>{
    setShow(0)
}

const onShow=(i)=>{
    setShow(i)
}
    
  useEffect(()=>{
   axios.get(`${config.base}plan/all`).
   then((res)=>{
    setPlan(res.data);
    console.log(res.data)
    setInterval(()=>{
        setLoad(false);
    },2000)
    
   }).catch((err)=>{

   })
  },[])
   


  return(
    <div className={styles.plan}>
        {
            load ?(<div className={styles.load}>
  <Loader/>
            </div>)
            :
            (

              
                  
                  


                   
<div className={styles.main}>
<Nave page={"plan"} />
    <div className={styles.util}></div>
    {/* <div className={styles.head}>
        Our Plans
    </div> */}
               <div className={styles.cardwrapper}>
               {
                plan.map((data,i)=>{
                    return(
                        <div className={`${styles.card}  ${i%2==0?styles.left:styles.right} `}>
                          <Pcard index={data.id} data={data} show ={show}onShow={onShow} onCancel={onCancel} i={i}/>
                         </div>   
                    )
                })
               }
               </div>
            </div>    



               

            )
              
        }
    </div>
  )

}
export default Plan;

