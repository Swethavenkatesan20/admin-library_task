import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {authors.map((author) => (
        <li key={author.name} className="list-group-item d-flex justify-content-between align-items-center">
          {author.name} (Born: {author.birthDate})
          <div>
            <button onClick={() => onEdit(author)} className="btn btn-sm btn-warning mr-2">Edit</button>
            <button onClick={() => onDelete(author.name)} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;
