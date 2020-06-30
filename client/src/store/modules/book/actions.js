export function addBook(book) {
    return {
        type: 'ADD_BOOK',
        book
    }
}

export function removeBook(bookId) {
    return { 
        type: 'REMOVE_BOOK', 
        bookId
    }
}

export function updateBook(book, bookId) {
    return { 
        type: 'UPDATE_BOOK', 
        book,
        bookId
    }
}