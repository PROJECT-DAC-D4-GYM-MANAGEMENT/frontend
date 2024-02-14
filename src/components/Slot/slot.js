import { Cascader, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config/config";
import styles from "./slot.module.css";
import Form from "react-bootstrap/Form";

const Slot = ({ isactive, data }) => {
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("user"))?.jwt;
  const [slot, setSlot] = useState({});
  const [trainer, setTrainer] = useState({});

  const onChangeSlot = (e) => {
    console.log(e.target.value.id)
    setSlot(e.target)
  };

  const onChangeTrainer = (value) => {
    console.log(value);
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
           
                <Form.Select  onChange={onChangeSlot}>
                  <option> Select Slot</option>
                  {
                    data.map((a)=>{
                        return (
                            <option  className={styles.option} style={{
                                margin:"20px"

                            }}value={a}>{`${a?.slot?.start} - ${a?.slot?.end}`}</option>
                        )
                    })
                  }
                </Form.Select>
              
              </div>

              <div className={styles.second}>
                {/* <Form.Select  onChange={onChangeSlot}>
                  <option> Select Trainer</option>
                  {
                    slot?.trainerList.map((a)=>{
                        return (
                            <option  className={styles.option} style={{
                                margin:"20px"

                            }}value={a}>{`${a?.user?.first} - ${a?.user?.last}`}</option>
                        )
                    })
                  }
                </Form.Select> */}
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Slot;
