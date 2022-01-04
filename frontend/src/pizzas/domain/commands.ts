import { SELECT_BASE } from "./events"

function selectBase(payload) {
  return {
    type: SELECT_BASE,
    payload,
  }
}

export { selectBase }
