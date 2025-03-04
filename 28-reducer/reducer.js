const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]
    case 'REMOVE_NAME':
      return state.filter((personName) => personName !== action.payload)
    case 'REMOVE_NAMES':
      return []
    default:
      return state
  }
}

let newState = reducer(initialState, {type:'ADD_NAME', payload: 'Maks'})
console.log(newState)
newState = reducer(newState, {type:'ADD_NAME', payload: 'Kate'})
console.log(newState)
newState = reducer(newState, {type:'REMOVE_NAME', payload: 'Kate'})
console.log(newState)
newState = reducer(newState, {type:'REMOVE_NAMES'})
console.log(newState)
newState = reducer(newState, {type:'ADD_NAME', payload: 'Kate'})
console.log(newState)
newState = reducer(newState, {type:'ADD_NAME', payload: 'Maks'})
console.log(newState)