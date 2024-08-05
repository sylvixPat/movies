import './App.css'
import MovieList from './components/MovieList'

function App() {

  //Api key 6b7ad9aa948b1d7a935cfaf0a66c1310
  //Api read access token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdhZDlhYTk0OGIxZDdhOTM1Y2ZhZjBhNjZjMTMxMCIsIm5iZiI6MTcyMjMwMTA4OC4zMDM3NzMsInN1YiI6IjY2YTgzOGRiMjEzNjhmNDc4MTVjMmM0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fxW9e9hIVU8d0_AHo2Pu9-NEsIQ69GjnWO6SbXZPf8


  return (
    <>
      <h1>Movies</h1>
      <MovieList />
    </>
  )
}

export default App
