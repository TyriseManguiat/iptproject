// Logout.js

import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        // Function to handle the logout process
        const handleLogout = async () => {
            try {
                // Call the backend script to destroy the session
                const response = await fetch('logout.php', {
                    method: 'POST'
                });

                if (response.ok) {
                    // Redirect to the login page after successful logout
                    window.location.href = 'index.php'; // Update the URL as per your setup
                } else {
                    console.error('Error logging out');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Trigger logout on component mount
        handleLogout();
    }, []);

    return (
        <div className="logout">
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
