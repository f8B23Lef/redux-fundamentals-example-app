import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import {
  loggerMiddleware,
  delayedMessageMiddleware,
} from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(
  loggerMiddleware,
  delayedMessageMiddleware
)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store
