import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes and update the state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable the button while submitting

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/; // Example pattern for a 10-digit phone number

        if (!emailRegex.test(formData.email)) {
            setError('Invalid email format');
            setIsSubmitting(false);
            return;
        }

        if (!phoneRegex.test(formData.phoneNumber)) {
            setError('Phone number must be 10 digits');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the form data as JSON
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setSuccess('You are registered successfully.');
                    setTimeout(() => {
                        // Redirect to the login page after successful registration
                        window.location.href = '/';
                    }, 2000);
                } else {
                    setError(result.message); // Display error message from the backend
                }
            } else {
                setError('There was an error during registration. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('There was an error during registration. Please try again.');
        }

        setIsSubmitting(false); // Re-enable button after submission
    };

    return (
        <div className="registration">
            <div className="form">
                <h1>REGISTER</h1>

                {/* Display error or success message */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                {/* Registration Form */}
                <form name="registration" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        pattern=".{8,}"
                        title="Password must be at least 8 characters long"
                    />
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone no."
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="diaryName"
                        name="diaryName"
                        placeholder="Name your Diary"
                        value={formData.diaryName}
                        onChange={handleChange}
                    />
                    <input type="submit" value={isSubmitting ? 'Registering...' : 'Register'} disabled={isSubmitting} />
                </form>

                {/* Use Link to navigate back to login page */}
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;
