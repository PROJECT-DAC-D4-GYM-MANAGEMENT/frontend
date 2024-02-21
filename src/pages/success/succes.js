
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'

import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slices/cart';
import { addProductDetails } from '../../store/slices/product';
;


const Success=()=>{

    const token=JSON.parse(sessionStorage.getItem("user"))?.jwt;
    const navigate=useNavigate();
    const [searchParams] = useSearchParams();
      const dispatch=useDispatch();
    
  
    useEffect(()=>{
        const membership=JSON.parse(sessionStorage.getItem("membership"));
        if(searchParams.get("id")=="plans"){
            axios.post(`${config.base}membership/add`,membership,{headers:{Authorization:`Bearer ${token}`}}).then((res)=>{
                console.log(res);
                setTimeout(()=>{
                  navigate(`/${searchParams.get("id")}`)
                },3000)
            }).catch((err)=>{
                console.log(err)
            })
        }
        if(searchParams.get("id")=="store"){
            setTimeout(()=>{
                navigate(`/${searchParams.get("id")}`)
                dispatch(addProduct({}))
                dispatch(addProductDetails({}))
              },3000)
           
          
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