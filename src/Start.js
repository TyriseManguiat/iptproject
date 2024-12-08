import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from React Router v6
import './start.css'; 
const Start = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [items, setItems] = useState([]); // State for slider items
    const [currentIndex, setCurrentIndex] = useState(0); // State for current slide index

    // Set up the slider and click event listener
    useEffect(() => {
        const slider = document.querySelector('.slider');
        const itemElements = Array.from(slider.children); // Convert node list to array
        setItems(itemElements); // Set the slider items

        // Handle previous/next slide logic
        const handleClick = (e) => {
            if (e.target.matches('.next')) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % itemElements.length);
            }
            if (e.target.matches('.prev')) {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + itemElements.length) % itemElements.length);
            }
        };

        document.addEventListener('click', handleClick, false);

        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleClick, false);
        };
    }, []);

    // Define slide styles with transition effects
    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.3s ease-in-out',
    };

    // Redirect to the diary page when the button is clicked
    const redirectToDiary = () => {
        navigate('/basicdiary'); // Use navigate from React Router v6
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
                            {item.cloneNode(true)} {/* Clone the item for animation */}
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
