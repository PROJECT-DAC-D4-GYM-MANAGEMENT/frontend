import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const Corousal=({images,height,width,timing,fading,control})=>{
  // console.log(images)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
       <Carousel activeIndex={index} fade={fading?true:false} onSelect={handleSelect} pause={false} variant={"dark"} indicators={false} interval={timing?timing:1000}  controls={false}>
      {
        images.map((i)=>{
          return (
            
               <Carousel.Item>
      <img src={i}/>
        
      </Carousel.Item>
            
          )
        })
      }
    </Carousel>
     
      
    
    </div>
  );
}
export default Corousal;



{/* <Carousel.Item>
        <img style={{height:"300px"} } src=''/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img  style={{height:"300px"}} src=''/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img  style={{height:"300px"}} src=''/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img  style={{height:"300px"}} src=''/>
       
      </Carousel.Item> */}