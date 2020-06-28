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
        default:
            return state
    }
}