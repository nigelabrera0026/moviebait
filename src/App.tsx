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
  const [noResults, setNoResults] = useState<boolean>(false); // State to track no results
  const [filter, setFilter] = useState<string>('movies'); // State to choose between Movies, TV series, or Trending

  const fetchMovies = async (query: string = '', filter: string = 'movies', limit: number = 20, page: number = 1) => {
    try {
      setLoading(true);
      setNoResults(false); // Reset no results state

      // Set default params
      let params: any = {
        query_term: query,
        limit,
        page,
      };

      // Apply filter based on user selection
      if (filter === 'movies') {
        params.genre = ''; // No specific genre filtering for all movies
      } else if (filter === 'tv_series') {
        params.genre = 'Drama'; // Assume "Drama" as TV Series for demo purposes (this is flexible based on the API)
      } else if (filter === 'trending') {
        params.sort_by = 'download_count'; // Sort by download_count for trending
      }

      const response = await axios.get(API_URL, { params });

      const fetchedMovies = response.data.data.movies || []; // Ensure movies is always an array
      setMovies(fetchedMovies);

      if (fetchedMovies.length === 0) {
        setNoResults(true); // If no movies were found, set no results state
      }

      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(); // Fetch initial set of movies on load
  }, []);

  const copyMagnetLink = (hash: string, title: string) => {
    const magnetURL = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(magnetURL).then(() => {
      // Show the copied message
      setCopyMessageVisible(true);

      // Hide the copied message after 2 seconds
      setTimeout(() => {
        setCopyMessageVisible(false);
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="content">
      <h1>Movie Bait</h1>

      {/* Search Bar */}
      <form onSubmit={(e) => {
        e.preventDefault();
        fetchMovies(query, filter);
      }} className="search-bar">
        <input
          type="text"
          placeholder="Search for movies or TV series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button onClick={() => { setFilter('movies'); fetchMovies(query, 'movies'); }}>Movies</button>
        <button onClick={() => { setFilter('tv_series'); fetchMovies(query, 'tv_series'); }}>TV Series</button>
        <button onClick={() => { setFilter('trending'); fetchMovies(query, 'trending'); }}>Trending</button>
      </div>

      {/* Control Bar */}
      <div className="control-bar">
        <button onClick={() => setViewMode('grid')}>Grid View</button>
        <button onClick={() => setViewMode('list')}>List View</button>
      </div>

      {/* Notification - Show the message only when visible */}
      {copyMessageVisible && <div className="copy-message">Torrent magnet URL copied</div>}

      {/* Movie List or No Results */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : noResults ? (
        <div className="no-results">
          <h2>Sorry, no results found.</h2>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'movie-grid' : 'movie-list'}>
          {movies.map((movie) => (
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
                      e.preventDefault(); // Prevent default link behavior
                      copyMagnetLink(torrent.hash, movie.title); // Copy the magnet link
                    }}
                  >
                    Copy Torrent URL ({torrent.quality})
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
