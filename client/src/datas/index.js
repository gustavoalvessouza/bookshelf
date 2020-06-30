export const books =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).book
        : []

export const comments =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).comment
        : []

export const categories = {
    reading: 'Reading',
    wantToRead: 'Want to read',
    read: 'Read'
}