import { comments } from '../datas'

export const commentsByBookId = bookId => {
    return comments.filter(comment => comment.parentId === bookId && comment.deleted === false)
}