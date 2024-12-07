// Start.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './start.css';

const Start = () => {
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const itemElements = Array.from(slider.children);
        setItems(itemElements);

        const handleClick = (e) => {
            if (e.target.matches('.next')) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % itemElements.length);
            }
            if (e.target.matches('.prev')) {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + itemElements.length) % itemElements.length);
            }
        };

        document.addEventListener('click', handleClick, false);

        return () => {
            document.removeEventListener('click', handleClick, false);
        };
    }, []);

    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.3s ease-in-out'
    };

    const redirectToDiary = () => {
        history.push("/basicdiary");
    };

    return (
        <div className="start-container">
            <div className="bg-image">
                <div className="clipart-container">
                    <img className="clipart" src="logo.png" alt="Logo" />
                </div>
            </div>
            <div className="login">
                <button className="button" onClick={redirectToDiary}>
                    <span>Start</span>
                </button>
                <br /><br /><br />
            </div>
            <div className="slider-container">
                <div className="slider" style={slideStyle}>
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            {item.cloneNode(true)}
                        </div>
                    ))}
                </div>
                <button className="prev">Previous</button>
                <button className="next">Next</button>
            </div>
            <div className="icon-bar">
                <a href="/logout">
                    <i className="fa fa-home"></i>
                </a>
                <a href="/display">
                    <i className="fa fa-calendar"></i>
                </a>
                <a href="/message">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="/feedback">
                    <i className="fa fa-pencil"></i>
                </a>
            </div>
        </div>
    );
};

export default Start;
