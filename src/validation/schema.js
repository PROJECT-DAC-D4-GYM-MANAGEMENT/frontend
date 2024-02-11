import * as Yup from "yup";

const msg = "mandatory field*";

const validationSchema = Yup.object({
  fname: Yup.string().required(msg).min(2).max(25),
  lname: Yup.string().required(msg).min(2).max(25),
  email: Yup.string()
    .email()
    .required(msg)
    .matches(/^(?!.*@[^,]*,)/)
    .min(2)
    .max(25),
  password: Yup.string()
    .required(msg)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Minimum 8 , 1 Uppercase, 1 Lowercase, 1 Number and 1 special  Character"
    ),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),

  phone: Yup.string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10)
    .max(10),
  // gender: Yup.string().required(),
});
export default validationSchema;


export const validationSigninSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(msg)
    .matches(/^(?!.*@[^,]*,)/)
    .min(2)
    .max(25),

  password: Yup.string().required(msg),
});

export const onSubmit = (values, action) => {
  console.log(values);
};
