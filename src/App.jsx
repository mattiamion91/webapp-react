//importo le pagine
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
//importo layout
import DefaultLayout from "./layouts/DefaultLayout"
//importo comp libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
