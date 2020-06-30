import { books } from '../datas'

export const booksByCategory = category => {
    return books
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter(book => book.category === category && book.deleted === false)
}