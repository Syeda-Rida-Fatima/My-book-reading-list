import { useState } from 'react';
import BookList from './components/BookList'

import BookCreate from './components/BookCreate';

function App() {

  const [books, setBooks] = useState([]);

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
    <div>
      <BookList books={books} onDelete={deleteById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
