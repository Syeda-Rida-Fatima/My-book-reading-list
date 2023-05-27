import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {

    const rerenderdBook = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
        );

    });
    return <div className='book-list'>{rerenderdBook}</div>;


}

export default BookList;