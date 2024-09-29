import React from 'react';
interface MovieCardProps {
  movie: {
    title: string;
    medium_cover_image: string;
    description_full?: string;
    summary?: string;
    torrents: Array<{ hash: string; quality: string }>;
  };
  viewMode: string;
  copyMagnetLink: (hash: string, title: string) => void;
  isDarkMode: boolean;
}

const MovieCard = ({ movie, viewMode, copyMagnetLink, isDarkMode }) => {
  return (
    <div className={`${viewMode === 'grid' ? 'p-4 rounded-lg shadow-lg' : 'flex items-start p-4 rounded-lg shadow-lg'} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <img src={movie.medium_cover_image} alt={movie.title} className={`${viewMode === 'grid' ? 'w-full mb-4 rounded-lg' : 'w-24 h-32 mr-4 rounded-lg'}`} />
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <p className="mb-4">{movie.description_full ? movie.description_full.slice(0, 120) + '...' : (movie.summary ? movie.summary.slice(0, 120) + '...' : 'No description available.')}</p>
        <div>
          {movie.torrents.map((torrent, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                copyMagnetLink(torrent.hash, movie.title);
              }}
              className="block text-green-500 hover:text-green-400"
            >
              Copy Torrent URL ({torrent.quality})
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
