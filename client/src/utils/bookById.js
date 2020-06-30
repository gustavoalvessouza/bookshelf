export const books =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).book
        : []

export const bookById = bookId => {
    return books.filter(book => book.id === bookId && book.deleted === false)
}