import React from 'react'
import { useLibrary } from './LibraryContext.jsx'


function LibraryStatus() {
     const {state} = useLibrary();
     return (
        <div>
            <h3>Library Status</h3>
            <p>Book Available: {state.books.filter((book) => book.available).length}</p>
            <p>Books Borrowed = {state.borrowedBooks.length}</p>
        </div>
        )
}

export default LibraryStatus