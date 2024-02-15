
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'

import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from 'react';
;


const Success=()=>{

    const token=JSON.parse(sessionStorage.getItem("user"))?.jwt;
  
    useEffect(()=>{

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