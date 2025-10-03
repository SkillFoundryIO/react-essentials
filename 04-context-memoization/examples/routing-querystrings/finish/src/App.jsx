import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div id="routerTarget">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
