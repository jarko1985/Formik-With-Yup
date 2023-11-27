"use client";

import { useFormik } from "formik";
import countries from "../../public/data/countries.json";
import * as Yup from "yup";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      terms: "",
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
        terms: Yup.array().required("Terms of service must be checked")
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <main className="flex min-h-screen items-center ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg font-mono p-10 w-1/2 mx-auto"
      >
        <div className="mt-6">
          <div className="pb-4">
            <label
              className={`block text-sm pb-2 ${
                formik.errors.first_name ? "text-red-500" : ""
              }`}
              htmlFor="first_name"
            >
              {formik.touched.first_name && formik.errors.first_name
                ? formik.errors.first_name
                : ""}
            </label>

            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder="Enter your first name"
              className="w-[100%] border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
            />
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
                formik.errors.country ? "text-red-500" : ""
              }`}
              htmlFor="country"
            >
              {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : ""}
            </label>
            <select
              value={formik.values.country}
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 border-gray-500 p-2 rounded-md focus:border-2 focus:border-teal-500 focus:ring-teal-500"
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
            className="bg-teal-500 font-bold text-sm text-white py-3 px-4 mt-6 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
