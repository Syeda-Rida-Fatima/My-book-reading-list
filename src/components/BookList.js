import BookShow from './BookShow';

function BookList({ books }) {

    const rerenderdBook = books.map((book) => {
        return <BookShow key={books.id} book={books} />;
    });
    return (
        <div className='book-list'>
            {rerenderdBook}
        </div>

    );
}

export default BookList;