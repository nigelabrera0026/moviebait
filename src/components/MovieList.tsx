import React from 'react';
import MovieCard from './MovieCard';

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
