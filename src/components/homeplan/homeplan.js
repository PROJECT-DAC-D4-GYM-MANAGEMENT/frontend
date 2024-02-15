import ReactVisibilitySensor from "react-visibility-sensor"
import Corousal from "../corousal/corousal"
import styles from "./homeplan.module.css"
import { img1, img2, img3, img4 } from "./infoUItil"
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { config } from "../../config/config";
import axios from "axios";


const HomePlan=()=>{

const [data,setData]=useState([]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover:false
    
      };

const ref=useRef(null);
const inView=useInView(ref);
const mianControl=useAnimation();
useEffect(()=>{
if(data.length==0){
    axios.get(`${config.base}plan/all`).then((res)=>{
        
        setData(res.data)
    })
}

if(inView){
 mianControl.start("visible")
}

},[inView])
    return (
        
    
  <div className={styles.info} ref={ref}>
<motion.div 
style={{ originY: 0 }}
variants={
    {
        hidden:{opacity: 0, scaleY: 0},
        visible:{opacity: 1, scaleY: 1}
    }
}
initial="hidden"
animate={mianControl}
transition={{duration:1.5,delay:0.5}}
>
       
<div className="slider-container">
      <Slider {...settings}>
        
          {data.map((a)=>{
            return(
                <div className={styles.card}>1</div>

            )
          })}
        
      </Slider>
    </div>

      </motion.div>
  </div>
        
         
    )
}
export default HomePlan;