import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Registration';
import Login from './Login';
import Footer from './Footer';
import Details from './Details';
import AddMovies from './AddMovies';

const MovieDetail = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <img src={movie.image} alt={movie.title} />
    <p>{movie.description}</p>
    <div className="rating">
      {Array.from({ length: movie.rating }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </div>
  </div>
);

const Home = ({ movies }) => (
  <div>
    <h2>Home</h2>
    <div id="search-results" className="movie-tiles">
      {movies.map((movie, index) => (
      <Link key={index} to={`/details/${index}`} className="movie-tile-link">
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
        </Link>
      ))}
    </div>
  </div>
);

const DetailsPage = ({ params }) => {
  const movieIndex = params.index;
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

  const movie = movies[movieIndex];

  return <MovieDetail movie={movie} />;
};


const SignIn = () => (
  <div>
    <h2>Sign In</h2>
    {}
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search" />
    <button className="search-button">Search</button>
  </div>
);

const App = () => {
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

  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="logo-search">
              <div className="logo">
                <Link to="/">
                  <img src="logo.png"/>
                </Link>
              </div>
              <SearchBar />
            </div>
            <div id="signin-signup">
              {/* Update the Link paths to use "/signin" and "/signup" */}
              <Link to="/signin" className="signin-button">
                Sign In
              </Link>
              <div className="slash">/</div>
              <Link to="/signup" className="signup-button">
                Sign Up
              </Link>
            </div>
          </header>
          <div className="container">
           <Routes>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/details/:index" element={<Details />} />
            <Route path="/add" element={<AddMovies />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
          </Routes>
        </div>
        <Footer /> {}
      </div>
    </Router>
  );
};

  export default App;