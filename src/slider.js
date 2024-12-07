// Slider.js
import React, { useState, useEffect } from 'react';
import './start.css';

const Slider = () => {
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

    return (
        <div className="slider-container">
            <div className="slider" style={slideStyle}>
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        {item.cloneNode(true)}
                    </div>
                ))}
            </div>
            <button className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)}>Previous</button>
            <button className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)}>Next</button>
        </div>
    );
};

export default Slider;
