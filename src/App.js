import { useState } from 'react';
import BookList from './components/BookList'

import BookCreate from './components/BookCreate';

function App() {

  const [books, setBooks] = useState([])
  const createBook = (title) => {
    const updatedBooks = [
      ...books, {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
  }
  return (
    <div>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
