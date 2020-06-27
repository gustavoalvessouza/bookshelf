export const books = [
    { id: 1, title: 'Clean Code', description: 'Descrição', category: 'reading', image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
    { id: 2, title: 'Clean Code', description: 'Descrição', category: null, image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
    { id: 3, title: 'Clean Code', description: 'Descrição', category: 'wantToRead', image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
    { id: 4, title: 'Clean Code', description: 'Descrição', category: 'read', image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
]

export const booksByCategory = category => {
    return books.filter(book => book.category === category)
}