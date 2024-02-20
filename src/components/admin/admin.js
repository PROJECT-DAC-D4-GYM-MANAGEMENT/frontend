import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import logo from "../nav/images/fithub-high-resolution-logo-white-transparent.png";
import {
  faBell,
  faEnvelope,
  faPhone,
  faSquareFull,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Detail from "../detail/details";
import axios from "axios";
import { config } from "../../config/config";
import CountUp from "react-countup";
import { Col, Row, Statistic } from "antd";
import Chart from "../chart/chart";

import CollapsibleTable from "../admindetails/admindetail";
import { useNavigate } from "react-router-dom";




const Admin = () => {
  const [detail, setDetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const navigate=useNavigate();
  const [addess, setAddress] = useState([]);
  const formatter = (value) => <CountUp end={value} separator="," />;
  useEffect(() => {
    axios
      .get(`${config.base}membership`,{headers:{Authorization:`Baerer ${JSON.parse(sessionStorage.getItem("user"))?.jwt}`}})
      .then((res) => {console.log(res)})
      .catch((e) => {});
  });

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.left} onClick={()=>{navigate("/")}}>
          <div>
            {" "}
            <img src={logo} />{" "}
          </div>
          <div> Fithub</div>
        </div>
        <div className={styles.right}>
          <div className={styles.notifiaction}>
            <FontAwesomeIcon icon={faBell} />{" "}
          </div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faSquareMinus} />
          </div>
          <div>
            <Detail />
          </div>
        </div>
      </div>

      <div className={styles.profile}>
        <div className={styles.top}>
          <div className={styles.topl}>
            <div className={styles.cover}>
              <img src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54565.jpg" />
            </div>
            <div className={styles.name}>
              <div className={styles.fname}>{detail.fname}</div>
              <div className={styles.lname}>{detail.lname}</div>
              <div className={styles.role}> - {detail.role}</div>
            </div>

            <div className={styles.detail}>
              <div>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                {detail.number}
              </div>
              <div>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {detail.email}
              </div>
            </div>

            <div className={styles.pic}>
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </div>
          </div>
          <div className={styles.topr}></div>
        </div>
      </div>

      <div className={styles.countwrapper}>

        <div className={styles.count}>
          <div className={styles.title}>Total Products</div>
          <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title=""
                value={112893}
                formatter={formatter}
              />
            </Col>
          </Row>
          </div>
        </div>

       
        <div className={styles.count}>
          <div className={styles.title}> Total Trainer</div>
          <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title=""
                value={112893}
                formatter={formatter}
              />
            </Col>
          </Row>
          </div>
        </div>
        <div className={styles.count}>
          <div className={styles.title}> Total Trainee</div>
          <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title=""
                value={112893}
                formatter={formatter}
              />
            </Col>
          </Row>
          </div>
        </div>
        <div className={styles.count}>
          <div className={styles.title}>Total Plan</div>
          <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title=""
                value={112893}
                formatter={formatter}
              />
            </Col>
          </Row>
          </div>
        </div>
        
      </div>
      <Chart/>
      <CollapsibleTable/>
      <div className={styles.trainee}></div>

      <div className={styles.trainer}></div>

      <div className={styles.plan}></div>
    </div>
  );
};

export default Admin;
