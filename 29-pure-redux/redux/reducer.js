import * as actionTypes from "./actionTypes"

const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_TIME:
      return [...state, action.payload]
    case actionTypes.REMOVE_ALL_TIMES:
      return []
    default:
      return state
  }
}

export default reducer