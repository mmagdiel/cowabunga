import { IDENTITY, SELECT_BASE } from "./events"

function selectBase(state, payload) {
  return { ...state, base: payload }
}

function id(state, payload) {
  return state
}

const create = {
  [SELECT_BASE]: selectBase,
  [IDENTITY]: id,
}

export { create }
