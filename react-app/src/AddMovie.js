import React, { useState } from 'react';
import './styles/AddMovie.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';

const AddMovie = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    const handleAdd = async (event) => {
        event.preventDefault();

        if (!formData.title || !formData.image || !formData.content) {
            return;
        }

        axios
            .post('https://at.usermd.net/api/movies', {
                title: formData.title,
                image: formData.image,
                content: formData.content
            })
            .then((response) => {
                handleChangeRoute();
            })
            .catch((error) => {
                console.log(error);

                setFormData({
                    title: '',
                    image: '',
                    content: '',
                });
            });
    };

    return (
        <div className="main-box_2 add-movie-box">
            <div className="add-movie-container">
                <h2>Add movie</h2>
                <form className="form-add-movie">
                    <div className="form-global form-left-column">
                        <p>Details</p>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Poster (link)"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Description"
                            rows="10"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="rate"
                            name="rate"
                            placeholder="Rating"
                            value={formData.rate}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="pubYear"
                            name="productionYear"
                            value={formData.productionYear}
                            placeholder="Publication year"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            placeholder="Genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                        />
                        <button className="add-movie-button-2" type="submit" onClick={handleAdd}>
                            Add movie
                        </button>
                    </div>
                </form>
                <button className="add-movie-button-2" type="submit" onClick={handleAdd}>
                    <Link to="/delete" className="login-link-text-gray">
                      Delete Movie <span className="arrow-icon"><FaArrowRight /></span>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default AddMovie;
