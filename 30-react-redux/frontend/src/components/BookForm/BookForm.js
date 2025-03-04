import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaSpinner} from "react-icons/fa"
import {addBook, fetchBook, selectIsLoadingViaAPI} from "../../redux/slices/booksSlice"
import bookData from "../../data/books.json"
import './BookForm.css'
import {crateBookWithId} from "../../utils/crateBookWithId"
import {setError} from "../../redux/slices/errorSlice"

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * (bookData.length - 1));
    const randomBook = bookData[randomIndex];

    dispatch(addBook(crateBookWithId(randomBook, 'random')))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(crateBookWithId({title, author}, 'manual')))
      setAuthor('')
      setTitle('')
    } else {
      dispatch(setError('You must fill title and author'))
    }
  }

  const handleAddRandomBookByApi = () => {
    dispatch(fetchBook("http://localhost:4000/random-book-delayed"))
  }
  return (<div className="app-block book-form">
      <h2>
        Add a New Book
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="author"></label>
          <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
        <button type="button" onClick={handleAddRandomBook}>Add random book</button>
        <button type="button" onClick={handleAddRandomBookByApi} disabled={isLoadingViaAPI}>
          {isLoadingViaAPI ? <>Loading... <FaSpinner className="spinner"/></> : 'Add random book by API'}
        </button>
      </form>
    </div>
  )
}

export default BookForm