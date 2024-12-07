// Registration.js

import React, { useState } from 'react';
import './registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        diaryName: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('registration.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setSuccess('You are registered successfully.');
                    setTimeout(() => {
                        window.location.href = 'index.php'; // Redirect to login page after successful registration
                    }, 2000);
                } else {
                    setError(result.message);
                }
            } else {
                setError('There was an error during registration. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('There was an error during registration. Please try again.');
        }
    };

    return (
        <div className="login">
            <div className="form">
                <h1>REGISTER</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <form name="registration" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required pattern=".{8,}" title="Password must be at least 8 characters long" />
                    <input type="tel" name="phoneNumber" placeholder="Phone no." value={formData.phoneNumber} onChange={handleChange} required />
                    <input type="text" name="diaryName" placeholder="Name your Diary" value={formData.diaryName} onChange={handleChange} />
                    <input type="submit" value="Register" />
                </form>
                <p>Already have an Account? <a href="index.php">Log In</a></p>
            </div>
        </div>
    );
};

export default Registration;
