import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./images/fithub-high-resolution-logo-white-transparent.png";
import styles from "./nav.module.css";
import { faArrowRightToBracket, faCartShopping, faCoffee, faGripVertical, faHouse, faRightToBracket, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import { Menu, Dropdown, Button } from 'antd';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


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
  const cart=useSelector((store)=>store.cart.products);
  const [length,setLength]=useState(Object.keys(cart).length);
  const [rotate ,setRotate]=useState(false);
  const navigate=useNavigate();
  const navigateTo=(url)=>{
            navigate(url)
  }

  useEffect(()=>{
    setLength(Object.keys(cart).length);
    setRotate(true);
     setTimeout(()=>{
      setRotate(false)
     },1000)
  },[cart])
  
  return (
    <div className={styles.nav}>
      <div className={styles.header_left} onClick={()=>{navigate("/")}}>
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

        

        <div className={styles.cartprofile} >
              

         <div className={`${styles.cart} ${page=="cart"?styles.activeLink:""}`}>
        <div className={page=="cart"?styles.active:""}  onClick={()=>{
          navigateTo(`/cart`)}}>
        {length !=0 && <div className={`${styles.length} ${rotate?styles.rotate:""}`}><span>{length}</span></div>}
        <FontAwesomeIcon icon={faCartShopping} />
        
      </div>
       </div>




              <div className={`${styles.profile} ${page=="profile"?styles.activeLink:""}`}>
        <div className={page=="signin"?styles.active:""}  onClick={()=>{
          
           const role=JSON.parse(sessionStorage.getItem("user")).role;

          navigateTo(`/${role}`)}}>
        <FontAwesomeIcon icon={faUser} />
        
      </div>
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
