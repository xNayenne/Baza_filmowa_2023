import React from 'react';
import './App.css';

function App() {
  const movies = [
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },
    { title: 'Movie', image: 'image2.png', description: 'Description of the movie...', rating: 5 },

  ];

return (
    <div className="App">
      <header className="App-header">
        <div className="logo-search">
          <div className="logo">
            <img src="logo.png" alt="Netflix Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div id="login-signup">
                <div id="login-register">
                  <button className="login-button">Log In</button>
                  <div className="slash">/</div>
                  <button className="signup-button">Sign Up</button>
                </div>

              </div>
      </header>

      <div className="container">
        <div id="search-results" className="movie-tiles">
          {movies.map((movie, index) => (
            <div key={index} className="movie-tile">
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div className="rating">
                {Array.from({ length: movie.rating }, (_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
                      &copy; 2023 Baza Filmów - Magdalena Kłósek
                  </footer>
    </div>
  );
}



export default App;
