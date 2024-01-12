import React, { useState } from 'react';
import './styles/AddMovie.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

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
                        <button type="submit" onClick={handleAdd}>
                            Add movie
                        </button>
                    </div>
                </form>
                <Link to="/delete" className="login-link-text-gray">Delete Movie</Link>
            </div>
        </div>
    );
};

export default AddMovie;
