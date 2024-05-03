import styles from "./feedback.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Corousal from "../corousal/corousal";
import axios from "axios";
import { config } from "../../config/config";
import Carousel from "react-bootstrap/Carousel";
const Feedback = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mianControl = useAnimation();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    if (data.length == 0) {
      axios.get(`${config.base}feedback`).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
    if (inView) {
      mianControl.start("visible");
    }
  }, [inView]);
  return (
    <div className={styles.main} ref={ref}>
      <motion.div
        style={{ originX: 1 }}
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: { opacity: 1, scaleX: 1 },
        }}
        initial="hidden"
        animate={mianControl}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className={styles.head}>FeedBacks</div>
        <div className={styles.feedback}>
          <div className={styles.left}>
            <Carousel
              activeIndex={index}
              fade={false}
              onSelect={handleSelect}
              pause={false}
              variant={"dark"}
              indicators={false}
              interval={1000}
              controls={false}
            >
              {data.map((a) => {
                return (
                  <Carousel.Item>
                    <div className={styles.img}>
                      <img src={a.image} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          <div className={styles.right}>
            <Carousel
              activeIndex={index}
              fade={false}
              onSelect={handleSelect}
              pause={false}
              variant={"dark"}
              indicators={false}
              interval={1000}
              controls={false}
            >
              {data.map((a) => {
                return (
                  <Carousel.Item>
                    <div>{a.message}</div>
                    <div>{a.rating}</div>
                    <div className={styles.name}>By : {a.name}</div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Feedback;
