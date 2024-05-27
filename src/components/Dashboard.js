import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (book) => {
    setBooks(books.map((b) => (b.isbn === book.isbn ? book : b)));
    setEditingBook(null);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const handleEditAuthor = (author) => {
    setAuthors(authors.map((a) => (a.name === author.name ? author : a)));
    setEditingAuthor(null);
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div className="container mt-4">
      <h1 className='p-3 mb-2 bg-dark text-white'>Admin Dashboard for a Library Management System</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className='p-3 mb-2 bg-secondary text-white'>Books Detail 📖</h2>
          <BookForm
            initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
            onSubmit={editingBook ? handleEditBook : handleAddBook}
            isEditing={!!editingBook}
          />
          <BookList books={books} onEdit={setEditingBook} onDelete={handleDeleteBook} />
        </div>
        <div className="col-md-6">
          <h2 className='p-3 mb-2 bg-secondary text-white'>Author Detail 📝</h2>
          <AuthorForm
            initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
            onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
            isEditing={!!editingAuthor}
          />
          <AuthorList authors={authors} onEdit={setEditingAuthor} onDelete={handleDeleteAuthor} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
