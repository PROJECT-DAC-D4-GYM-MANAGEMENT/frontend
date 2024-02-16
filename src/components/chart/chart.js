
import Corousal from "../corousal/corousal"
import styles from "./chart.module.css"

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BarChart } from "@mui/x-charts";
import { colors } from "@mui/material";




const chartSetting = {
     xAxis: [
       
     ],
     width: 900,
     height: 400,
   };
   const dataset = [
     {
      
       seoul: 801,
       month: 'Jan',
     },
     {
       
       seoul: 288,
       month: 'Fev',
     },
     {
      
       seoul: 411,
       month: 'Mar',
     },
     {
       
       seoul: 763,
       month: 'Apr',
     },
     {
       
       seoul: 979,
       month: 'May',
     },
     {
     
       seoul: 644,
       month: 'June',
     },
     {
   
       seoul: 319,
       month: 'July',
     },
     {
     
       seoul: 249,
       month: 'Aug',
     },
     {
     
       seoul: 131,
       month: 'Sept',
     },
     {
      
       seoul: 555,
       month: 'Oct',
     },
     {
      
       seoul: 448,
       month: 'Nov',
     },
     {
      
       seoul: 250,
       month: 'Dec',
     },
   ];
   
   const valueFormatter = (value) => `Rs ${value}000`;

const Chart=()=>{

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
style={{ originX: 0 }}
variants={
    {
        hidden:{opacity: 0, scaleX: 0},
        visible:{opacity: 1, scaleX: 1}
    }
}
initial="hidden"
animate={mianControl}
transition={{duration:1.5,delay:1.5}}
>
<div className={styles.chart}>
  <BarChart
 
  colors={["black"]}
  width={100}
  margin={
     {
     bottom : 0
    
     }
  }
  skipAnimation={false}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  </div>
      

      </motion.div>
  </div>
        
         
    )
}
export default Chart