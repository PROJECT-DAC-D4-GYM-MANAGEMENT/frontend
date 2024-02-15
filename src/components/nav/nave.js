import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./images/fithub-high-resolution-logo-white-transparent.png";
import styles from "./nav.module.css";
import { faArrowRightToBracket, faCoffee, faGripVertical, faHouse, faRightToBracket, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import { Menu, Dropdown, Button } from 'antd';


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);




const Nave = ({ page }) => {
 
  const navigate=useNavigate();
  const navigateTo=(url)=>{
            navigate(url)
  }
  return (
    <div className={styles.nav}>
      <div className={styles.header_left}>
        <div className={styles.logoCon}>
          <img src={logo} className={styles.logo}></img>
        </div>
        <div className={styles.name}>Fithub</div>
      </div>
      <div className={styles.header_middle}>

        <div className={styles.outer} onClick={()=>{navigateTo("/")}}>
          <div className={styles.inner}>
      
            <div className={page=="home"?styles.active:""}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
            </div>
            
            
          </div>
        </div>

        
        <div className={styles.outer } onClick={()=>{navigateTo("/store")}}>
          <div className={styles.inner}>
            <div className={page=="store"?styles.active:""}>
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
            </div>
           
          </div>
        </div>

        <div className={styles.outer } onClick={()=>{navigateTo("/plans")}}>
          <div className={styles.inner}>
            <div className={page=="plan"?styles.active:""}>
            <FontAwesomeIcon icon={faStore} />
            <span>Plans</span>
            </div>
           
          </div>
        </div>

    
           
      </div>
      <div className={styles.header_right}>
      <div>
        
        {
        sessionStorage.getItem("user") &&   

        <div className={`${styles.login} ${page=="profile"?styles.activeLink:""}`}>
        <div className={page=="signin"?styles.active:""}  onClick={()=>{
          
           const role=JSON.parse(sessionStorage.getItem("user")).role;

          navigateTo(`/${role}`)}}>
        <FontAwesomeIcon icon={faUser} />
        
      </div>
       </div>

        }
        {   

          !sessionStorage.getItem("user") &&
          <div className={`${styles.login} ${page=="signin"?styles.activeLink:""}`}>
          <div className={page=="signin"?styles.active:""}  onClick={()=>{navigateTo("/signin")}}>
          <span>Login</span>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </div>
      </div>
        }

      </div>
      </div>
    </div>
  );
};
export default Nave;
