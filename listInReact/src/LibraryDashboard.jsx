import React from 'react'
import { LibraryProvider } from './LibraryContext.jsx'
import BookList from './BookList'
import LibraryStatus from './LibraryStatus'


function LibraryDashboard() {
  return (
    <LibraryProvider>
        <div>
            <h1>Welcome to the Magic Library</h1>
            <LibraryStatus />
            <BookList />
        </div>
    </LibraryProvider>
  )
}

export default LibraryDashboard