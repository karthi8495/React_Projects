import { useRef } from "react"
import React from 'react'
import { useLibrary } from "./LibraryContext.jsx"

function BookList() {
    const {state, dispatch } = useLibrary();
    const bookRef = useRef(null);

    const borrowBook = (id) => {
        dispatch( {type: 'borrow', id});
        bookRef.current.focus();
    };

    const returnBook = (id) => {
        dispatch({ type: 'return', id});
    };

    return (
        <div>
            <h2>Library Book List</h2>
            <ul>
                {state.books.map((book) => (
                    <li key={book.id}>
                        <span>{book.title} by {book.author}</span>
                        <button ref={bookRef}
                        onClick={() => (book.available ? borrowBook(book.id) : returnBook(book.id))}>
                            {book.available ? 'Borrow' : 'Return'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList