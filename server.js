const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route for registration
app.post('/register', (req, res) => {
    const { name, username, email, password, phoneNumber, diaryName } = req.body;

    // Validate input data
    if (!name || !username || !email || !password || !phoneNumber) {
        return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    if (!phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ success: false, message: 'Invalid phone number format.' });
    }

    // Hash password before saving to the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error hashing password' });
        }

        // Simulate saving user to a database (you can integrate actual DB here)
        const newUser = {
            name,
            username,
            email,
            password: hashedPassword, // Store hashed password
            phoneNumber,
            diaryName
        };

        // Simulate successful registration
        console.log('User registered:', newUser); // For testing purposes
        res.status(201).json({ success: true, message: 'User registered successfully.' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
