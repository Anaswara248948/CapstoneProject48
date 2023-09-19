import React from 'react';
import { Formik } from 'formik';

const images = [
  'https://wallpaperset.com/w/full/7/7/1/359274.jpg', // Replace this with your image URLs
  // Add more image URLs if needed
];

const Addbook = () => {
  const currentImageIndex = 0; // Change this to the desired image index

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <h1>New Book Registration</h1>
      <Formik
      initialValues={{
        book_id: '',
        book_name: '',
        genre: '',
        author: '',
        description: '',
        published_date: '',
        price: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.book_id) {
          errors.book_id = 'Required';
        }
        if (!values.book_name) {
          errors.book_name = 'Required';
        }
        if (!values.genre) {
          errors.genre = 'Required';
        }
        if (!values.author) {
          errors.author = 'Required';
        }
        if (!values.description) {
          errors.description = 'Required';
        }
        if (!values.published_date) {
          errors.published_date = 'Required';
        }
        if (!values.price) {
          errors.price = 'Required';
        } else if (isNaN(values.price)) {
          errors.price = 'Must be a valid number';
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
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.genre}
            />
            {errors.genre && touched.genre && <div className="error-message">{errors.genre}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            {errors.author && touched.author && <div className="error-message">{errors.author}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label><br></br>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="error-message">{errors.description}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="published_date">Published Date</label>
            <input
              type="date"
              id="published_date"
              name="published_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.published_date}
            />
            {errors.published_date && touched.published_date && <div className="error-message">{errors.published_date}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div className="error-message">{errors.price}</div>}
          </div><br></br>
          <button type="submit" disabled={isSubmitting}>
            Register Book
          </button>
        </form>
      )}
    </Formik>
    </div>
  );
};

export default Addbook;
