import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware()
  // other store enhancers if any
)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, composedEnhancer)

export default store
