import ReactVisibilitySensor from "react-visibility-sensor"
import Corousal from "../corousal/corousal"
import styles from "./info.module.css"
import { img1, img2, img3, img4 } from "./infoUItil"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Info=()=>{

const ref=useRef(null);
const inView=useInView(ref);
const mianControl=useAnimation();
useEffect(()=>{
if(inView){
 mianControl.start("visible")
}

},[inView])
    return (
        
    
  <div className={styles.info} ref={ref}>
<motion.div 
variants={
    {
        hidden:{opacity: 0, scale: 0},
        visible:{opacity: 1, scale: 1}
    }
}
initial="hidden"
animate={mianControl}
transition={{duration:1.5,delay:0.5}}
>
       
        <div className={styles.section}>
        <div className={styles.secleft}>
          <div className={styles.cor1}>
            <Corousal images={img1} timing={1000} fading={true} />
          </div>
          <div className={styles.cor2}>
            <Corousal images={img2} timing={1000} fading={true} />
          </div>
          <div className={styles.cor3}>
            <Corousal images={img3} timing={1000} fading={true} />
          </div>
          <div className={styles.cor4}>
            <Corousal images={img4} timing={1000} fading={true} />
          </div>

        </div>
        <div className={styles.secRight}>
            <div className={styles.upper}>
                Respect Your Body Its Your Greatest Asset
            </div>
            <div className={styles.bottom}>
             <div>
             <FontAwesomeIcon icon={ faCircleCheck} />
            <span>Increasae Muscle  And Strength</span>
             </div>
             <div>
             <FontAwesomeIcon icon={ faCircleCheck} />
            <span>Be Healthier Then Before</span>
             </div>
             <div>
             <FontAwesomeIcon icon={ faCircleCheck} />
             
            <span>Increasae Stamina</span>
             </div>
            </div>
        </div>
      </div>

      </motion.div>
  </div>
        
         
    )
}
export default Info