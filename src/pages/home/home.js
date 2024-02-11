 import Corousal from "../../components/corousal/corousal";
import Nave from "../../components/nav/nave";
import styles  from "./home.module.css"
import {image} from "./images/image"

const Home=()=>{

    return(
        <div className={styles.home}>
            <div className={styles.corousal}>
            <Corousal images={image} timing={3000} fading={true}/>
           
          </div>
           <Nave page={"home"}/>
           <div className={styles.head}>
                <div className={styles.headTop} >
                    Refresh Your Routine Shape Your <span>Fitness</span>
                </div>
                <div className={styles.headMiddle} >
                Welcome to our gym ! where every effort counts. Push yourself,
                 transform your body, and achieve your goals. Let's get started
                </div>
                <div className={styles.headBottom}>
                    <div>
                        Join Now
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                {/* <span>hello</span> */}
            </div>
        </div>
    )
}
export default Home;