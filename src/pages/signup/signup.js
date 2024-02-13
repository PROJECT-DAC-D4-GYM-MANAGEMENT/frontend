import { useFormik } from "formik";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import validationSchema from "../../validation/schema";
import { initialSignupValues } from "../../constant/form";
import styles from "./signup.module.css";
import { useEffect, useState } from "react";
import Corousal from "../../components/corousal/corousal";
import { image } from "../../constant/SignupCorousalImage/image";
import logo1 from "../../assets/signup/picturetopeople.org-f5290505e50fc0d935cc3568faaf2ab749c5b1388ab674637e.png";
import logo from "../../assets/logo/fithub-high-resolution-logo-transparent.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { toasty } from "../../utils/toast";
import { userApi } from "../../Service/userApi";
const Signup = () => {
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_API_URL);
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialSignupValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {

        userApi(values, "signup").then((res) => {
            
            res.status?toasty(true, "succesful"): toasty(false, "please try again with proper credentials");
             
            setTimeout(() => {
              res.status && navigate("/signin",{ state: { value:"home" } });
            }, 2000);

          })
          .catch((err) => {
           
          });
      },
    });

  useEffect(() => {
    console.log(values);
    if (
      values.fname &&
      values.lname &&
      values.email &&
      values.phone &&
      values.password &&
      values.confirm_password &&
      !errors.fname &&
      !errors.lname &&
      !errors.email &&
      !errors.phone &&
      !errors.password &&
      !errors.confirm_password
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  return (
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
              <div>
                <div className={styles.name}>
                  <div className={styles.fname}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                      >
                        <Form.Control
                          // id="fname"
                          type="name"
                          autoComplete="off"
                          name="fname"
                          values={values?.fname}
                          placeholder="enter first name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={values.fname && !errors.fname}
                          isInvalid={errors.fname && touched.fname}
                        />
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.fname && touched.fname && (
                      <div className={styles.msg}> {errors.fname} </div>
                    )}
                  </div>

                  <div className={styles.lname}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                      >
                        <Form.Control
                          // id="lname"
                          type="name"
                          autoComplete="off"
                          name="lname"
                          values={values?.lname}
                          placeholder="enter last name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={values.lname && !errors.lname}
                          isInvalid={errors.lname && touched.lname}
                        />
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.lname && touched.lname && (
                      <div className={styles.msg}> {errors.lname} </div>
                    )}
                  </div>
                </div>

                <div className={styles.emp}>
                  <div className={styles.email}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                      >
                        <Form.Control
                          //    id="email"
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
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.email && touched.email && (
                      <div className={styles.msg}> {errors.email} </div>
                    )}
                  </div>

                  <div className={styles.phone}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone"
                        className="mb-3"
                      >
                        <Form.Control
                          className={styles.Form}
                          type="name"
                          // id="phone"
                          name="phone"
                          autoComplete="off"
                          values={values?.phone}
                          placeholder="enter phone number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={values.phone && !errors.phone}
                          isInvalid={errors.phone && touched.phone}
                        />
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.phone && touched.phone && (
                      <div className={styles.msg}> {errors.phone} </div>
                    )}
                  </div>
                </div>

                <div className={styles.pw}>
                  <div className={styles.pass}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          //  id="password"
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
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.password && touched.password && (
                      <div className={styles.msg}> {errors.password} </div>
                    )}
                  </div>

                  <div className={styles.cf}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Confirm Password"
                        className="mb-3"
                      >
                        <Form.Control
                          //  id="confirm_password"
                          type="password"
                          name="confirm_password"
                          autoComplete="off"
                          values={values?.confirm_password}
                          placeholder="confirm password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={
                            values.confirm_password && !errors.confirm_password
                          }
                          isInvalid={
                            errors.confirm_password && touched.confirm_password
                          }
                        />
                      </FloatingLabel>
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    {errors.confirm_password && touched.confirm_password && (
                      <div className={styles.msg}>
                        {" "}
                        {errors.confirm_password}{" "}
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.bottom}>
                  <div className={styles.submit}>
                    <button
                      type="submit"
                      disabled={!valid}
                      className={valid ? styles.active : styles.inactive}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className={styles.signin}>
                    <div>
                      Already Have an Account ?{" "}
                      <Link className={styles.link} to="/signin"
                      state={{  value:"home"  }}
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Signup;
