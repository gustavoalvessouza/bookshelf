export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

export function removeComment(commentId) {
    return { 
        type: 'REMOVE_COMMENT', 
        commentId
    }
}