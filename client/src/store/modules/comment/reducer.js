import { defineState } from 'redux-localstore'
import produce from 'immer'

const defaultState = []

const initialState = defineState(defaultState)('comment')

export default function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return produce(state, draft => {
                const { comment } = action

                draft.push(comment)
            })
        default:
            return state
    }
}