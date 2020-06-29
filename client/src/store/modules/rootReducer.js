import { combineReducers } from 'redux'

import book from './book/reducer'
import comment from './comment/reducer'

export default combineReducers({
    book,
    comment
})