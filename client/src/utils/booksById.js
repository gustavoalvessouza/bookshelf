export const books =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).book
        : []

export const booksById = id => {
    return books.filter(book => book.id === id && book.deleted === false)
}