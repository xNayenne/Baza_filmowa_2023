import React, {useEffect, useState} from 'react';
import './styles/Main.css'
import MovieGrid from "./MovieGrid";
import {FaPlus} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const handleChangeRoute = () => {
        navigate('/add');
        window.location.reload();
    };

    return (
        <div className="main">
            <div className="main-box">
                <section className="sectionGrid">
                    <h2>Movies</h2>
                    <MovieGrid />
                </section>
            </div>
            {isLoggedIn && (
                <div className="add-movie-button" onClick={handleChangeRoute}>
                    <FaPlus />
                    <span>  Add movie</span>
                </div>
            )}
        </div>
    );
};

export default Main;
