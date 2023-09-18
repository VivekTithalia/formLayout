import React from "react";
import "./index.css"; 
import validationSchema from "./Yup";
import { useFormik } from "formik";


const Reg = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      country: "",
      gender:""
    },
    validationSchema:validationSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const handleCancel = () => {
    formik.resetForm();
  };
  return (
    <>
      <div className="continer">
        <div className="boxes">
        <img className='homeimg' src="https://picsum.photos/300" alt="" srcset="" />
        </div>

          <form action="" method="POST"  onSubmit={formik.handleSubmit}>
        <div className="boxes">
          <h2>Registration Form</h2>
          <div className="forinput">
            <input type="text" name="name" placeholder="Enter your name" onChange={formik.handleChange}
              value={formik.values.name} />
          </div>
          <div className="forinput">
            <input type="email" name="email" placeholder="Enter your email" onChange={formik.handleChange}
              value={formik.values.email} />
          </div>
          <div className="forinput">
            <input type="text" name="city" placeholder="Enter your city"  onChange={formik.handleChange}
              value={formik.values.city}/>
          </div>
          <div className="forinput">
            <input type="text" name="country" placeholder="Enter your country" onChange={formik.handleChange}
              value={formik.values.country} />
          </div>
          <div className="forinput">
              <label>
                Gender:
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === "Male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === "Female"}
                />
                Female
              </label>
              </div>
          <div className="forbtn">
           <button className="btn" type="submit">Submit</button>
            <button className="btn2" type="button"  onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Reg;
