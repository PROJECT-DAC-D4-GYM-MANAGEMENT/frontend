import { useEffect, useState } from "react";
import { Card, Skeleton, Button } from "@nextui-org/react";
import React from "react";
import styles from "./productpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/slices/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductPage = ({ current, data, index }) => {
  const [load, setLoad] = useState(index == current);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.products);
  const [currentItem, setCurrentItem] = useState(-1);
 

  const addToCart = (i) => {
    const obj = { ...cart };
    obj[i] = (obj[i] || 0) + 1;
    setCurrentItem(i);
    dispatch(addProduct(obj));
  };

  const removeFromCart = (i) => {
    
    setCurrentItem(-1);
    const obj = { ...cart };
    delete obj[i];
    dispatch(addProduct(obj));
  };

  useEffect(() => {
    setTimeout(() => {
      if (load) setLoad(false);
      setCurrentItem(-1)
    }, 1500);
    console.log("hello");
  }, [cart]);

  return (
    <div>
      {load && (
        <div className={styles.load}>
          {data.map((a) => {
            return (
              <div className={styles.loader}>
                <div className={styles.loader1}></div>
                <div className={styles.loader2}></div>
                <div className={styles.loader3}></div>
              </div>
            );
          })}
        </div>
      )}

      {!load && (
        <div className={styles.show}>
          {data.map((a) => {
            return (
              <div className={styles.data}>
                <div className={styles.img}>
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" />
                </div>

                <div className={styles.data2}>{a.name}</div>
                <div className={styles.data3}>BY : {a.supplier} store</div>

                <div className={styles.data4}> ₹ {a.price}</div>
                <div className={styles.add}>
                  {!cart[a.id] ? (
                    <div
                      className={styles.before}
                      onClick={() => {
                        addToCart(a.id);
                      }}
                    >
                      {" "}
                      Add To Cart{" "}
                    </div>
                  ) : (
                    <div className={styles.after}>
                        {console.log("abcd",currentItem,a.id)}
                      {currentItem == a.id  && (
                        <div className={styles.animate}>
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </div>
                      )}

                      {
                        currentItem != a.id &&
                           <div className={styles.top}>
                              <div className={styles.left}   >
                        {" "}
                        <span className={styles.logo}>
                          {" "}
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        Added
                      </div>
                      <div
                        className={styles.delete}
                        onClick={() => {
                          removeFromCart(a.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                            </div>
                      }
                    

                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ProductPage;

// category
// :
// "Strength Equipment"
// description
// :
// (2) ['Professional-grade dumbbells set for strength training.', 'Includes a variety of weights for versatile workouts.']
// id
// :
// 1
// images
// :
// []
// name
// :
// "Dumbbells Set"
// price
// :
// 99.99
// stock
// :
// 50
// supplier
// :
