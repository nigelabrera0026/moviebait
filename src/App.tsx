import React, { useState, useEffect } from 'react';
import ControlBar from './components/ControlBar';
import ViewModeBar from './components/ViewModelBar';
import MovieList from './components/MovieList';
import Notification from './components/Notification';
import NavBar from './components/NavBar';
import './App.css';

interface Movie {
  id: number;
  title: string;
  medium_cover_image: string;
  description_full: string;
  torrents: Array<{ hash: string; quality: string }>;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);
  const [filter, setFilter] = useState('trending');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  const API_URL = 'https://yts.mx/api/v2/list_movies.json';

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?limit=${limit}&page=${page}&query_term=${query}`);
      const data = await response.json();
      setMovies(data.data.movies);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies.');
      setLoading(false);
    }
  };

  // Fetch movies when limit, page, or filter changes
  useEffect(() => {
    fetchMovies();
  }, [limit, page]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode by toggling class on document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <NavBar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        query={query}
        setQuery={setQuery}
        fetchMovies={fetchMovies}
      />
      <ControlBar filter={filter} handleFilterClick={setFilter} limit={limit} setLimit={setLimit} viewMode={viewMode} setViewMode={setViewMode} />
      <ViewModeBar viewMode={viewMode} setViewMode={setViewMode} />
      {error ? <Notification message={error} isVisible={!!error} /> : null}
      {loading ? <div className="loading">Loading...</div> : <MovieList movies={movies} viewMode={viewMode} />}
    </div>
  );
};

export default App;
