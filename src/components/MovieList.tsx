import React from 'react';
import MovieCard from './MovieCard';
interface Movie {
  id: number;
  title: string;
  medium_cover_image: string;
  description_full: string;
  torrents: Array<{ hash: string; quality: string }>;
}
const MovieList = ({ movies, viewMode }) => {
  return (
    <div className={`${viewMode === 'grid' ? 'grid grid-cols-4 gap-6' : 'space-y-4'}`}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default MovieList;
