import React, { useState, useEffect } from 'react';
import './styles/Search.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://at.usermd.net/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleItem = (title, id) => {
        navigate(`/details/${encodeURIComponent(title)}/${id}`);
    };

    const handleHover = (itemId) => {
        setHoveredItemId(itemId);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="main-box add-movie-box">
            <div className="search-result-container">
                <h2>Search results for: {query}</h2>
                {filteredMovies.length > 0 ? (
                    <ul>
                        {filteredMovies.map((movie) => (
                            <li key={movie.id}>
                                <div
                                    className={`link-element-item ${hoveredItemId === movie.id ? 'hovered' : ''}`}
                                    onClick={() => handleItem(movie.title, movie.id)}
                                    onMouseEnter={() => handleHover(movie.id)}
                                    onMouseLeave={() => handleHover(null)}
                                >
                                    <div className="movie-details">
                                        <div className="movie-image">
                                            <img src={movie.image} alt={movie.title} />
                                        </div>
                                        <div className="movie-description">
                                            <h4 className="-link">{movie.title}</h4>
                                            <p>{movie.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p id="no-results">No matching result for your request.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
