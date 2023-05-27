import BookShow from './BookShow';

function BookList({ books, onDelete }) {

    const rerenderdBook = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} />;
    });
    return (
        <div className='book-list'>
            {rerenderdBook}
        </div>

    );
}

export default BookList;