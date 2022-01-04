import { applyMiddleware, compose, createStore } from "redux"
import { createLogger } from "redux-logger"
import { createReduce, initialStore } from "~pizzas"

const initialState = { ...initialStore }
const reducer = (state, action) => {
  const { type, payload } = action
  const [_, func] = createReduce(type)
  return func(state, payload)
}

const logger = createLogger({})

const composeEnhancers = compose(
  applyMiddleware(logger),
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default preloadedState => {
  return createStore(reducer, initialState, composeEnhancers)
}
