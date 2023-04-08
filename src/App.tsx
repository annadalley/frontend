import React from 'react';
import './App.css';
import MovieList from './pages/MovieCollection';
import Home from './pages/Home';
import Podcast from './pages/Podcasts';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// This is the function to actually create the app

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="MovieCollection" element={<MovieList />} />
          <Route path="Podcast" element={<Podcast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
