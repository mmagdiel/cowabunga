import { applyMiddleware, compose, createStore } from "redux"
import { createLogger } from "redux-logger"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const logger = createLogger({})

const initialState = { count: 0 }
const composeEnhancers = compose(
  applyMiddleware(logger),
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
//const createStore = () => reduxCreateStore(reducer, initialState)
//export default createStore
export default preloadedState => {
  return createStore(reducer, initialState, composeEnhancers)
}
