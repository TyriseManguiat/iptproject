// App.js

import React, { useState } from 'react';
import './indexstyle.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('', { // Update the URL to your backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setEmail(data.email);
                window.location.href = 'start.php'; // Update the URL to your dashboard
            } else {
                setError('Username or password is incorrect.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login">
            {email && <p>Session Email: {email}</p>}
            <div className="form">
                <h1>LOG IN</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                {error && <p>{error}</p>}
                <p>Not registered yet? <a href='registration.php'>Register Here</a></p>
            </div>
        </div>
    );
};

export default App;