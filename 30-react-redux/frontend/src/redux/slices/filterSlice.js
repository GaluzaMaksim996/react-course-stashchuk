import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteFilter: (state,) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => {
      return initialState
    }
  }
})

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filters.title
export const selectAuthorFilter = (state) => state.filters.author
export const selectOnlyFavoriteFilter = (state) => state.filters.onlyFavorite
export default filterSlice.reducer