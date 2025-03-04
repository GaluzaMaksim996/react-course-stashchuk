import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {crateBookWithId} from "../../utils/crateBookWithId"
import {setError} from "./errorSlice"

const initialState = {
  books: [],
  isLoadingViaAPI: false
}

export const fetchBook = createAsyncThunk('books/fetchBook', async (url, thunkAPI) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {...state, books: state.filter(book => book.id !== action.payload)}
    },
    toggleFavoriteBook: (state, action) => {
      return state.books.map(book => book.id === action.payload ? {...book, isFavorite: !book.isFavorite} : book)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoadingViaAPI = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false
        if (action.payload.title && action.payload.author) {
          state.books.push(crateBookWithId(action.payload, 'API'))
        }
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoadingViaAPI = false
      })
  }
})

export const {
  addBook,
  deleteBook,
  toggleFavoriteBook
} = booksSlice.actions

export const selectBooks = state => state.books.books
export const selectIsLoadingViaAPI = state => state.books.isLoadingViaAPI
export default booksSlice.reducer