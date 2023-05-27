import { useState } from 'react';
import BookList from './components/BookList';

import BookCreate from './components/BookCreate';

function App() {

  const [books, setBooks] = useState([]);

  const editById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };
  const deleteById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    const updatedBooks = [
      ...books, {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editById} onDelete={deleteById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
