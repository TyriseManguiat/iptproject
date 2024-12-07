import React, { useState } from 'react';
import './try.css';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            backgroundImage: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
            title: '"Lossless Youths"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            backgroundImage: 'https://i.redd.it/tc0aqpv92pn21.jpg',
            title: '"Estrange Bond"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            backgroundImage: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
            title: '"The Gate Keeper"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            backgroundImage: 'https://images7.alphacoders.com/878/878663.jpg',
            title: '"Last Trace Of Us"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            backgroundImage: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
            title: '"Urban Decay"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            backgroundImage: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
            title: '"The Migration"',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
    ];

    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.3s ease-in-out',
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <main>
            <ul className='slider' style={slideStyle}>
                {items.map((item, index) => (
                    <li className='item' key={index} style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                        <div className='content'>
                            <h2 className='title'>{item.title}</h2>
                            <p className='description'>{item.description}</p>
                            <button>Read More</button>
                        </div>
                    </li>
                ))}
            </ul>
            <nav className='nav'>
                <IonIcon className='btn prev' icon={arrowBackOutline} onClick={prevSlide} />
                <IonIcon className='btn next' icon={arrowForwardOutline} onClick={nextSlide} />
            </nav>
        </main>
    );
};

export default Slider;
