import { Cascader, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config/config";
import styles from "./slot.module.css";
import Form from "react-bootstrap/Form";

const Slot = ({ isactive, data ,pay}) => {
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("user"))?.jwt;
  const [slot, setSlot] = useState(0);
  const [list, setList] = useState([]);
  const[ trainer,setTrainer]=useState(0);
    

  const onChangeSlot = (e) => {

    setSlot(JSON.parse(e.target.value).slot.id);
    setList(JSON.parse(e.target.value)?.trainerList);
    
  };

  

  const onChangeTrainer = (e) => {
    setTrainer(JSON.parse(e.target.value).id);
  };
  useEffect(() => {
    isactive &&
      setTimeout(() => {
        setLoad(false);
      }, 2000);
  }, [isactive]);

  return (
    <div className={styles.main}>
      <div className={styles.load}>{isactive && load && <Spin />}</div>
      <div>
        { !load &&  (
          <div className={styles.data} >
            <div className={styles.drop}>
              <div className={styles.first}>
           
                <Form.Select onChange={onChangeSlot}>
                  <option  value={{}}> Select Slot</option>
                  {
                    data.map((a)=>{
                        return (   
                            <option value={JSON.stringify(a)}> {`${a?.slot?.start} - ${a?.slot?.end}`}</option>
                              )
                    })
                  }
                </Form.Select>
              
              </div>

              <div className={styles.second}>
                <Form.Select  onChange={onChangeTrainer} disabled={list.length<=0}>
                  <option value={{}}> Select Trainer</option>
                  {
                    list?.map((a)=>{
                        return (
                            <option value={JSON.stringify(a)}>{`${a?.user?.first} - ${a?.user?.last}`}</option>
                        )
                    })
                  }
                </Form.Select>
              </div>

              <div  className={`${styles.third}   ${slot && trainer? styles.active:styles.not}`} onClick={()=>{
                pay({slotId:slot,trainerId:trainer})
              }}>
                Pay Now
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Slot;
