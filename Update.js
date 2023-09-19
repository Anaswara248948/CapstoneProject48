import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Update.css';

const Update = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookId = queryParams.get('id');

  const [bookDetails, setBookDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  // Fetch book details based on bookId
  useEffect(() => {
    // Replace with your API call to fetch book details
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${bookId}`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Implement save functionality
    // You can use an API call to update the book details
    setEditMode(false);
  };

  return (
    <div className="update-container">
      <h1>Update Book Details</h1>
      <form>
        <div className="form-group">
          <label htmlFor="book_name">Book Name</label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={bookDetails.book_name || ''}
            readOnly={!editMode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={bookDetails.genre || ''}
            readOnly={!editMode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookDetails.author || ''}
            readOnly={!editMode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={bookDetails.description || ''}
            readOnly={!editMode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="published_date">Published Date</label>
          <input
            type="date"
            id="published_date"
            name="published_date"
            value={bookDetails.published_date || ''}
            readOnly={!editMode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={bookDetails.price || ''}
            readOnly={!editMode}
          />
        </div>
        {editMode ? (
          <div className="edit-save-buttons">
            <button type="button" onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div className="edit-save-buttons">
            <button type="button" onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Update;
