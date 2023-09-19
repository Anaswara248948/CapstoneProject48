import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import './Updatebook.css';

const Updatebook = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    // Redirect to Update.js with book_id as a query parameter
    history.push(`/update?id=${values.book_id}`);
  };

  return (
    <div className="update-book-container">
      <h1>Update Book Details</h1>
      <Formik
        initialValues={{ book_id: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.book_id) {
            errors.book_id = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
            <button type="submit" disabled={isSubmitting}>
              Find Book
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Updatebook;
