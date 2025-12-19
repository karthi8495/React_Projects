import { createContext, useContext, useReducer, useRef } from "react"


// library state context
const LibraryContext = createContext();

// initial library state
const initialState = {
    books: [
        {id:1, title:'Book 1', author: 'Author 1', available:true},
        {id:2, title:'Book 2', author: 'Author 2', available:true},
        {id:3, title:'Book 3', author: 'Author 3', available:true},
        {id:4, title:'Book 4', author: 'Author 4', available:true},
        {id:5, title:'Book 5', author: 'Author 5', available:true},
    ],
    borrowedBooks: [],
};

// the reducer function manage the library state

function libraryReducer(state, action) {
    switch (action.type) {
        case 'borrow':
            return {
                ...state,
                books:state.books.map(book =>
                    book.id === action.id ? { ...book, available: false } : book
                ),
                borrowedBooks: [...state.borrowedBooks, action.id],
            };
        case 'return':
            return {
                ...state,
                books: state.books.map(book => 
                    book.id === action.id ? {...book, available: true} : book
                ),
                borrowedBooks: state.borrowedBooks.filter(id => id !== action.id),
            };
        default:
            return state;
    }
}


export function LibraryProvider({ children }){
    const [state, dispatch] = useReducer(libraryReducer, initialState);

    return (
        <LibraryContext.Provider value = {{ state, dispatch}}>
            { children }
        </LibraryContext.Provider>
    )
}

export function useLibrary() {
    return useContext(LibraryContext);
}