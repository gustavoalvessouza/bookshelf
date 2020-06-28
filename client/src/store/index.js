import { createStore } from 'redux'
import storeSynchronize from 'redux-localstore'

import rootReducer from './modules/rootReducer'

export const store = createStore(rootReducer)

storeSynchronize(store)