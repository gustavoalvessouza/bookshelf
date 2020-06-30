export const comments =
    JSON.parse(localStorage.getItem('reduxStore'))
        ? JSON.parse(localStorage.getItem('reduxStore')).comment
        : []

export const commentsByBookId = bookId => {
    return comments.filter(comment => comment.parentId === bookId && comment.deleted === false)
}