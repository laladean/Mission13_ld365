import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import MovieCollection from './pages/MovieCollection';
import Navbar from './Navbar';

//more necessary navigation elements and all website pages

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="movies" element={<MovieCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
