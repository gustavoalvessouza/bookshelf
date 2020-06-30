import { books } from '../datas'

export const booksById = id => {
    return books.filter(book => book.id === id && book.deleted === false)
}