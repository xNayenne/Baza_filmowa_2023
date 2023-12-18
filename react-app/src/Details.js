import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { index } = useParams();

  if (!index) {
    return <div>No movie index provided</div>;
  }

  const movieIndex = parseInt(index, 10);
const movies = [
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 2 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 3 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 4 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 2 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 2 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 1 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 3 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 4 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 1 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 2 },
    { title: 'Movie', image: '/image2.png', description: 'Description of the movie...', rating: 5 },
  ];

  if (isNaN(movieIndex) || movieIndex < 0 || movieIndex >= movies.length) {
    return <div>Invalid movie index</div>;
  }

  const movie = movies[movieIndex];

  return (
    <div className="details-container">
      <div className="details-left">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="details-right">
        <h2>{movie.title}</h2>
        <div className="rating">
          {Array.from({ length: movie.rating }, (_, i) => (
            <span key={i}>&#9733;</span>
          ))}
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default Details;