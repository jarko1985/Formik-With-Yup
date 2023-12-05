"use client";

import { useFormik } from "formik";
import countries from "../../public/data/countries.json";
import * as Yup from "yup";
import { useRouter } from "next/navigation";


const Home=()=> {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password:"",
      country: "",
      gender:"",
      terms: false,
      message:""
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("first name is required")
        .min(3, "at least 3 letters"),
      last_name: Yup.string()
        .required("Last name is required")
        .min(3,"at least 3 letters"),
      email: Yup.string()
        .email("Invalid Email")
        .required("Email Address is required"),
      password:Yup.string().required("Password is required...")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
       gender:Yup.string()
      .required('Please select your gender.'),
      terms: Yup.bool().oneOf([true],'Please agree to the terms and conditions to proceed.'),
      message:Yup.string().required('Message is Required').min(5,"Type at least 5 letters")
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <main className="flex min-h-screen items-center ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg font-mono p-10 w-1/2 mx-auto border border-blue-500"
      >
        <div className="mt-6">
          <div className="pb-4 relative z-0">
           

            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder=""
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
             <label
              className='absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              htmlFor="first_name"
            >
              first name
            </label>
            <p className="text-red-500">{formik.touched.first_name && formik.errors.first_name
                ? formik.errors.first_name
                : ""}</p>
          </div>
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.errors.last_name ? "text-red-500" : ""
              }`}
              htmlFor="last_name"
            >
              {formik.touched.last_name && formik.errors.last_name
                ? formik.errors.last_name
                : ""}
            </label>
            <input
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder="Enter your last name"
              className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.errors.last_name ? "text-red-500" : ""
              }`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your Email Address"
              className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="pb-4">
          <label
              className={`block text-sm pb-2 ${
                formik.errors.password ? "text-red-500" : ""
              }`}
              htmlFor="password"
            >
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
              className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.errors.country ? "text-red-500" : ""
              }`}
              htmlFor="country"
            >
              {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : "Select your Country"}
            </label>
            <select
              value={formik.values.country}
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
            >
              {countries.map((el, index) => {
                return (
                  <option key={index} value={el.code}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="pb-4">
            <label className={`block text-sm pb-2 ${
                formik.errors.message ? "text-red-500" : ""
              }`}
              htmlFor="message">
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Type your Message:"}    
            </label>
            <textarea
            className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
              value={formik.values.message}
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            
            ></textarea>
          </div>
          <div className="pb-4 space-x-1">
          <label
              className={`text-sm pb-2`}
              htmlFor="gender"
            >
              Male
            </label> 
            <input 
            type="radio"  
            id="male"
            value="male"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultChecked={formik.values.gender=== "male"}
            /> 
            <label
              className={`text-sm pb-2`}
              htmlFor="gender"
            >
              Female
            </label> 
            <input 
            type="radio"  
            id="female"
            value="female"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultChecked={formik.values.gender=== "female"}
            /> 
            <p className="text-red-500">{formik.touched.gender && formik.errors.gender
                ? formik.errors.gender
                : ""}</p> 
          </div>
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.touched.terms && formik.errors.terms ? "text-red-500" : ""
              }`}
              htmlFor="terms"
            >
              {formik.touched.terms && formik.errors.terms
                ? formik.errors.terms
                : "Terms of service"}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="terms"
                value="checked"
                className="h-5 w-5 text-teal-500"
              />
              <p>
                I agree to the terms and Service that my data will be taken and
                sold
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal-500 font-bold text-sm text-white py-3 px-4 mt-6 rounded-lg border border-transparent shadow-xl shadow-gray-400 transition-all duration-300 hover:text-teal-500 hover:bg-white hover:border hover:border-teal-500"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}


export default Home;