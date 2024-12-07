import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './auth.css';

const Auth = () => {
    const history = useHistory();

    useEffect(() => {
        const checkAuth = () => {
            const username = localStorage.getItem("username"); // Retrieve username from localStorage
            if (!username) {
                history.push("/index"); // Redirect if not authenticated
            }
        };

        checkAuth();
    }, [history]);

    return (
        <div className="auth-container">
            <h1>Welcome!</h1>
            <p>You are authenticated as {localStorage.getItem("username")}.</p>
        </div>
    );
};

export default Auth;
