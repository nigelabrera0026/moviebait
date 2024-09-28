import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

interface Movie {
  id: number;
  title: string;
  medium_cover_image: string;
  summary: string;
  description_full: string;
  torrents: { url: string; quality: string; hash: string }[];
}

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>(''); // State for search query
  const [viewMode, setViewMode] = useState<string>('grid'); // State for grid or list view
  const [copyMessageVisible, setCopyMessageVisible] = useState<boolean>(false); // State to control the "copied" message
  const [filter, setFilter] = useState<string>('trending'); // State for filter, defaults to 'trending'

  const fetchMovies = async (query: string = '', limit: number = 20, page: number = 1, filter: string = 'trending') => {
    try {
      setLoading(true);
      const params: any = {
        query_term: query,
        limit,
        page,
      };

      // Apply filtering logic based on filter type
      if (filter === 'trending') {
        params.sort_by = 'download_count'; // Sort by download count for trending
      } else if (filter === 'tv') {
        params.genre = 'TV'; // Filter by TV series genre
      }

      const response = await axios.get(API_URL, { params });
      setMovies(response.data.data.movies || []); // Avoid breaking if no movies
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('', 20, 1, 'trending'); // Default to trending movies on load
  }, []);

  const copyMagnetLink = (hash: string, title: string) => {
    const magnetURL = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(magnetURL)
      .then(() => {
        setCopyMessageVisible(true);
        setTimeout(() => {
          setCopyMessageVisible(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleFilterClick = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setQuery(''); // Clear search query when filter is clicked
    fetchMovies('', 20, 1, selectedFilter); // Fetch filtered movies
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="content">
      <h1>Movie Bait</h1>

      {/* Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMovies(query, 20, 1, filter);
        }}
        className="search-bar"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Control Bar */}
      <div className="control-bar">
        <button onClick={() => handleFilterClick('movies')} className={filter === 'movies' ? 'active-filter' : ''}>Movies</button>
        <button onClick={() => handleFilterClick('tv')} className={filter === 'tv' ? 'active-filter' : ''}>TV Series</button>
        <button onClick={() => handleFilterClick('trending')} className={filter === 'trending' ? 'active-filter' : ''}>Trending</button>
      </div>

      {/* View Mode Bar */}
      <div className="view-mode-bar">
        <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'active-view' : ''}>Grid View</button>
        <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'active-view' : ''}>List View</button>
      </div>

      {/* Notification */}
      {copyMessageVisible && <div className="copy-message">Torrent magnet URL copied</div>}

      {/* Movie List */}
      <div className={viewMode === 'grid' ? 'movie-grid' : 'movie-list'}>
        {movies.length === 0 ? (
          <p>No results found. Please try a different search.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className={viewMode === 'grid' ? 'movie-card' : 'movie-list-item'}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description_full ? movie.description_full.slice(0, 120) + '...' : (movie.summary ? movie.summary.slice(0, 120) + '...' : 'No description available.')}</p>
              <div>
                {movie.torrents.map((torrent, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      copyMagnetLink(torrent.hash, movie.title);
                    }}
                  >
                    Copy Torrent URL ({torrent.quality})
                  </a>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
