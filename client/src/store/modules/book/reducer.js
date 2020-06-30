import { defineState } from 'redux-localstore'
import produce from 'immer'

const defaultState = []

const initialState = defineState(defaultState)('book')

export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            return produce(state, draft => {
                const { book } = action

                draft.push(book)
            })
        case 'REMOVE_BOOK':
            return produce(state, draft => {
                const bookIndex = draft.findIndex(b => b.id === action.bookId)

                if (bookIndex >= 0) {
                    draft[bookIndex].deleted = true
                }

            })
        case 'UPDATE_BOOK':
            return produce(state, draft => {
                const bookIndex = draft.findIndex(b => b.id === action.bookId)

                const { book } = action

                if (bookIndex >= 0) {
                    draft[bookIndex].title = book.title
                    draft[bookIndex].description = book.description
                    draft[bookIndex].author = book.author
                    draft[bookIndex].category = book.category
                    draft[bookIndex].imageURL = book.imageURL
                    draft[bookIndex].deleted = false
                }

            })
        default:
            return state
    }
}