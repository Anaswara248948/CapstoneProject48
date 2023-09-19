import React from 'react';
import { Formik } from 'formik';

import './Deletebook.css'; // Import the CSS file for styling

const DeleteBook = () => (
  <div className="delete-book-container">
    <h1>Delete Book</h1>
    <Formik
      initialValues={{
        book_id: '',
        book_name: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.book_id) {
          errors.book_id = 'Required';
        }
        if (!values.book_name) {
          errors.book_name = 'Required';
        }
        return errors;
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
            <label htmlFor="book_id">Book ID</label>
            <input 
              type="text"
              id="book_id"
              name="book_id"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.book_id}
            />
            {errors.book_id && touched.book_id && <div className="error-message">{errors.book_id}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="book_name">Book Name</label>
            <input 
              type="text"
              id="book_name"
              name="book_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.book_name}
            />
            {errors.book_name && touched.book_name && <div className="error-message">{errors.book_name}</div>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Delete Book
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default DeleteBook;
