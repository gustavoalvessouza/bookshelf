export const books =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).book
        : []

export const booksByCategory = category => {
    return books.filter(book => book.category === category)
}