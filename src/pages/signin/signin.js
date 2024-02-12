import { useFormik, validateYupSchema } from "formik";
import { initialSigninValues } from "../../constant/form";
import Form from "react-bootstrap/Form";
import styles from "./signin.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Corousal from "../../components/corousal/corousal";
import { image } from "../../constant/SignupCorousalImage/image";
import logo1 from "../../assets/signin/picturetopeople.org-5727749cc0e912c24b7600d0e2cb56f645f13a3cd51f2d33b3.png";
import logo from "../../assets/logo/fithub-high-resolution-logo-transparent.png";
import { validationSigninSchema } from "../../validation/schema";
import axios from "axios";
import { userApi } from "../../Service/userApi";
import { toast } from "react-toastify";
import { toasty } from "../../utils/toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/user";
import Nave from "../../components/nav/nave";
const Signin = () => {
  const [valid, setValid] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {state}=useLocation();
  // console.log(state)
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialSigninValues,
      validationSchema: validationSigninSchema,
      onSubmit: (values, action) => {
        
        userApi(values,"signin").then((res)=>{
          console.log(res)
          res.status && sessionStorage.setItem("user",JSON.stringify(res.data))
          res.status ? toasty(true, "succesful"): toasty(false, "please try again");
          dispatch(addUser(res?.data?.role))
          setTimeout(()=>{
            state.value="home"?navigate("/"):navigate(-1);
          },2000)
          console.log(res)
        }).catch((err)=>{
         


        })

        
      },
    });
  useEffect(() => {
    if (values.email && values.password && !errors.email && !errors.password) {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  console.log(values)
  return (
    <>
    <Nave page={"signin"}/>
    <div>
      <div className={styles.signup_upper}>
        <div className={styles.head}>
          <div className={styles.hello}>
            <img src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif" />
          </div>
          <div className={styles.hello1}>
            <img src={logo1} />
          </div>
        </div>
        <div className={styles.img}>
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className={styles.signup_inner}>
          <div className={styles.signup_left}>
            <div className={styles.logo_wrapper}>
              <div className={styles.logo}>
                <img src={logo} />
              </div>
              <div className={styles.slogan}>
                Cultivate Your Strength, Shape Your Success
                {/* "Fitness Made Simple, Results Made Real!" */}
              </div>
            </div>

            <div className={styles.corousal}>
              <Corousal images={image} />
            </div>
          </div>
          <div className={styles.signup_right}>
            <div className={styles.form}>
              <Form onSubmit={handleSubmit}>
                <div className={styles.email}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label for="email">Email Address</Form.Label>
                    <Form.Control
                    //   id="email"
                      type="email"
                      autoComplete="off"
                      name="email"
                      values={values?.email}
                      placeholder="enter email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={values.email && !errors.email}
                      isInvalid={errors.email && touched.email}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                  {errors.email && touched.email && (
                    <div className={styles.msg}> {errors.email} </div>
                  )}
                </div>

                <div className={styles.pw}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label for="password">Password</Form.Label>
                    <Form.Control
                    //   id="password"
                      type="password"
                      autoComplete="off"
                      name="password"
                      values={values?.password}
                      placeholder="enter password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={values.password && !errors.password}
                      isInvalid={errors.password && touched.password}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                  {errors.password && touched.password && (
                    <div className={styles.msg}> {errors.password} </div>
                  )}
                </div>
                <div className={styles.signin}>

                <button
            type="submit"
            disabled={!valid}
            className={valid ? styles.active : styles.inactive}
          >
            Sign In
          </button>
                </div>
                
              </Form>

              <div className={styles.signup}>
              Don't have an account ? <Link className={styles.link}to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Signin;
