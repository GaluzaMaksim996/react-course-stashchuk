import './Filter.css'
import {useDispatch, useSelector} from "react-redux"
import {
  resetFilters,
  selectAuthorFilter, selectOnlyFavoriteFilter,
  selectTitleFilter,
  setAuthorFilter, setOnlyFavoriteFilter,
  setTitleFilter
} from "../../redux/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const handleResetFilter = () => {
    dispatch(resetFilters())
  }
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input type="text" placeholder="Filter by title..." value={titleFilter} onChange={handleTitleFilterChange}/>
        </div>
        <div className="filter-group">
          <input type="text" placeholder="Filter by author..." value={authorFilter}
                 onChange={handleAuthorFilterChange}/>
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavoriteFilter}
                   onChange={handleOnlyFavoriteFilterChange}/>
            Only favorite
          </label>
        </div>
        <button onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter

