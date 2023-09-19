import React from 'react';
import { Formik } from 'formik';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="login-container">
    <h1>Login </h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={values => {
        const errors = {};
        // if (!values.username) {
        //   errors.username = 'Required';
        // }
        // if (!values.password) {
        //   errors.password = 'Required';
        // }
        // return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username} required
            />
            {errors.username && touched.username && <div className="error-message">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password} required
            />
            {errors.password && touched.password && <div className="error-message">{errors.password}</div>}
          </div>
          <br></br>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>

          <br></br>
        <Link to="/Register">New User? Register Now</Link>
        <br></br>

        </form>
      )}
    </Formik>
  </div>
);

export default Login;

