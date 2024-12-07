// Message.js

import React, { useEffect, useState } from 'react';
import './messagestyle4.css';

const Message = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        // Check if the user is logged in
        const checkSession = async () => {
            try {
                const response = await fetch('check_session.php'); // Replace with the URL for checking session status
                if (!response.ok) {
                    // Redirect to login page if session is not active
                    window.location.href = 'start.php'; // Update the URL as needed
                }
            } catch (error) {
                console.error('Error checking session:', error);
            }
        };

        checkSession();
    }, []);

    // Functions to open and close side navigation
    const openNav = (id) => {
        document.getElementById(id).style.width = '1327px';
        document.getElementById(id).style.height = '260px';
    };

    const closeNav = (id) => {
        document.getElementById(id).style.width = '0';
    };

    return (
        <div className="bg-image">
            <img
                src="https://media1.giphy.com/media/twQYPSiVdcq3s2KFyo/200w.gif?cid=6c09b952eoruw4mzbm6d2skcmlagyxcvq1jlj11hpai8gynj&ep=v1_gifs_search&rid=200w.gif&ct=g"
                className="image"
                alt="Background"
            />

            <div className="box">
                <div className="contact">REACH US AT</div>
                <br />
                <br />

                <a href="#" className="fa fa-google" onClick={() => openNav('mySidenav')}></a>
                <a href="#" className="fa fa-instagram" onClick={() => openNav('mySidenav2')}></a>
                <a href="#" className="fa fa-facebook" onClick={() => openNav('mySidenav3')}></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin" onClick={() => openNav('mySidenav4')}></a>
                <a href="start.php">
                    <br />
                    <br />
                    <button type="button" className="back">
                        BACK
                    </button>
                </a>

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav('mySidenav')}>
                        &times;
                    </a>
                    <div className="send">MAIL US AT</div>
                    <br />
                    <br />
                    <p>✉ iseeyou@gmail.com</p>
                </div>

                <div id="mySidenav2" className="sidenav2">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav('mySidenav2')}>
                        &times;
                    </a>
                    <div className="send">INSTAGRAM ACCOUNT</div>
                    <br />
                    <br />
                    <p>📱 iseeyou2024</p>
                </div>

                <div id="mySidenav3" className="sidenav3">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav('mySidenav3')}>
                        &times;
                    </a>
                    <div className="send">FACEBOOK ACCOUNT</div>
                    <br />
                    <br />
                    <p>💻 I See You 2024</p>
                </div>

                <div id="mySidenav4" className="sidenav4">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav('mySidenav4')}>
                        &times;
                    </a>
                    <div className="send">LINKEDIN ACCOUNT</div>
                    <br />
                    <br />
                    <p>💻 linkedin.com/in/I-See-You-123904014</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
