import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {books.map((book) => (
        <li key={book.isbn} className="list-group-item d-flex justify-content-between align-items-center">
          {book.title} by {book.author} (ISBN: {book.isbn})
          <div>
            <button onClick={() => onEdit(book)} className="btn btn-sm btn-warning mr-2">Edit</button>
            <button onClick={() => onDelete(book.isbn)} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
