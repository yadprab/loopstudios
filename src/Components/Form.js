import React from "react";
import { useFormik } from "formik";
const Form = ({ name, title, val }) => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
   
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
  });

  return (
    <>
      <section className={name}>
        <h2>{title}</h2>
        <form action="" onSubmit={formik.handleSubmit}>
          <section className="form--control">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </section>
          {formik.errors.email ? <small>{formik.errors.email}</small> : null}
          <input type="submit" value={val} id="submit" />
        </form>
      </section>
    </>
  );
};

export { Form };
