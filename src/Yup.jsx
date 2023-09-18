import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(10).required("Please Enter your name"),
  email: Yup.string().email().required("Please Enter your Email"),
  city: Yup.string().min(4).required("Please Enter your password"),
  country: Yup.string().required("please enter your country"),
  gender: Yup.string().required("Please select your gender"),
});

export default validationSchema;