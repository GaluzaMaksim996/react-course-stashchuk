import {configureStore} from '@reduxjs/toolkit'
import booksReducer from "./slices/booksSlice"
import filterReducer from "./slices/filterSlice"
import errorReducer from "./slices/errorSlice"

const store = configureStore({
  reducer: {
    books: booksReducer,
    filters: filterReducer,
    error: errorReducer
  },
})

export default store