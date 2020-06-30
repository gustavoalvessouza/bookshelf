export const books =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).book
        : []

export const booksByCategory = category => {
    return books
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter(book => book.category === category && book.deleted === false)
}