
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'

import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/slices/cart';
import { addProductDetails } from '../../store/slices/product';
;



const Success=()=>{

    const user=JSON.parse(sessionStorage.getItem("user"));
    const navigate=useNavigate();
    const [searchParams] = useSearchParams();
      const dispatch=useDispatch();
     
      const calcTotal=()=>{
       const cart= JSON.parse(sessionStorage.getItem("cart"));
   const productDetails= JSON.parse(sessionStorage.getItem("productDetails"));
        let total=0;
        for(let a in productDetails){
           total+= (productDetails[a].price*cart[a])
        }
        return total.toFixed(2);
      }
  
    useEffect(()=>{
        const membership=JSON.parse(sessionStorage.getItem("membership"));
        if(searchParams.get("id")=="plans"){
            axios.post(`${config.base}membership/add`,membership,{headers:{Authorization:`Bearer ${user.jwt}`}}).then((res)=>{
                console.log(res);
                sessionStorage.removeItem("membership")
                setTimeout(()=>{
                  navigate(`/${searchParams.get("id")}`)
                },3000)
            }).catch((err)=>{
                console.log(err)
            })
        }
        if(searchParams.get("id")=="store"){
            const obj={
                userId:user.id,
                prodQty:JSON.parse(sessionStorage.getItem("cart")),
                amount:calcTotal()
            }

            axios.post(`${config.base}orders/save`,obj,{headers:{Authorization:`Bearer ${user.jwt}`}}).then((res)=>{
                sessionStorage.removeItem("productDetails")
                sessionStorage.removeItem("cart")
                setTimeout(()=>{
                    navigate(`/${searchParams.get("id")}`)
                    dispatch(addProduct({}))
                    dispatch(addProductDetails({}))
                  },3000)
            })
           
           
          
        }
      
       
    })

    return(
        <div class="success">
         


            <div class="load-wrapper">


         <div class="succes-wrapper">
                <div>
                    Processing Payment
                    
                
                </div>
                <div>
               
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="success" />
                
                
                
                
                </div>
                <div>
                Please Dont Refresh
                   
                </div>
                
            </div>



            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    
    <Spinner animation="border" variant="success" />
    
  </Stack>
            </div>
        
        </div>
    )
    
}
export default Success;