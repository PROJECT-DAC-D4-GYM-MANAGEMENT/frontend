import axios from "axios"
import { config } from "../config/config";



export const userApi= async (data,endpoint)=>{

   const url=`${config.base}user/${endpoint}`;
   try{
    const res= await axios.post(url,data);
    return {data:res.data,status:true};
   }
   catch(err){
    return {err:err,status:false};
   }

}