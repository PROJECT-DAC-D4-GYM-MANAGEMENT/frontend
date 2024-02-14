import ReactVisibilitySensor from "react-visibility-sensor"
import Corousal from "../corousal/corousal"
import styles from "./pcard.module.css"
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import Slot from "../Slot/slot";
import axios from "axios";
import { config } from "../../config/config";






const Pcard=({data,index,onShow,show,onCancel,i})=>{


const ref=useRef(null);
const inView=useInView(ref);
const mianControl=useAnimation();
const navigate=useNavigate();
const [slot,setSlot]=useState([]);
const token=JSON.parse(sessionStorage.getItem("user"))?.jwt;

useEffect(()=>{

  if(slot.length==0){{
    axios.get(`${config.base}slot/trainer`,{headers:{Authorization :`Bearer ${token}` }}).then((res)=>{
        console.log(res.data)
        setSlot(res.data)
     }).catch((err)=>{
        console.log(err)
     })
  }}

if(inView){
 mianControl.start("visible")
}

},[inView])
    return (
        
    
  <div  ref={ref}>
<motion.div 
style={index%2==1?{ originX: 0 }:{ originX: 1 }}
variants={
    {   

        
        hidden:{opacity: 0, scaleX: 0},
        visible:{opacity: 1, scaleX: 1}
    }
}
initial="hidden"
animate={mianControl}
transition={{duration:1,delay:0}}
>
       
    {
         
            <div className={styles.main}>
             <div className={styles.upper}>
                   <div className={styles.name}>{data?.name}</div>
                   <div className={styles.price}> ₹{data?.price}</div>
                   {/* <div className={styles.duration}>{data?.durationMonths}</div> */}
                   <div className={styles.desc}>
                    {
                        data?.dscription.map((a)=>{
                            return (<div>
                     <FontAwesomeIcon icon={ faCircleCheck} />
                     <span>
                        {a}
                     </span>
                            </div>)
                        })
   
                    }
                   </div>
                   <div className={styles.btn}>
                       {
                        show ==index?
                        <div className={styles.cancel} onClick={onCancel}>cancel</div>:
                        <div className={styles.buy} onClick={()=>{
                            sessionStorage.getItem("user")?onShow(index):navigate("/signin")
                            
                        }}>buy</div>
                       }
                       
                   </div>

                 </div> 

                 {
                  (
                  
                    <div className={`${i%2==0?styles.downl:styles.downr} ${show ==index ?styles.active:""}`}>
                     {console.log(show,index)}
                   <Slot data={slot}  isactive={show == index}/>
                    
                 </div>
                   
                    )
                 }
                 
            </div>
            
            
    }

      </motion.div>
  </div>
        
         
    )
}
export default Pcard






