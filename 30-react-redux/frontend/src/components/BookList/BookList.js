import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs"
import {useDispatch, useSelector} from "react-redux"
import {deleteBook, toggleFavoriteBook} from "../../redux/slices/booksSlice"
import './BookList.css'
import {selectAuthorFilter, selectOnlyFavoriteFilter, selectTitleFilter} from "../../redux/slices/filterSlice"
import {selectBooks} from "../../redux/slices/booksSlice"

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const filteredBooks = books.filter(book => {
    const filteredTitleBooks = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const filteredAuthorBooks = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const filteredFavoriteBooks = onlyFavoriteFilter ? book.isFavorite : true
    return filteredTitleBooks && filteredAuthorBooks && filteredFavoriteBooks
  })

  const highLightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0
        ? <div> No books available</div>
        : <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <div className="book-info">
                {highLightMatch(book.title, titleFilter)} book
                by <strong>{highLightMatch(book.author, authorFilter)}</strong> ({book.source})
              </div>
              <span onClick={() => dispatch(toggleFavoriteBook(book.id))}>
              {book.isFavorite
                ? <BsBookmarkStarFill className="star-icon"/>
                : <BsBookmarkStar className="star-icon"/>}
              </span>
              <button className="book-actions" onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
            </li>
          ))}
        </ul>}
    </div>
  )
}

export default BookList