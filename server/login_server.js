const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 8080;
const MONGO_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'loginApp';

let db;
let usersCollection;
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jeevankumar101319@gmail.com',
        pass: 'htdb ptch sfux cfle'
    }
});

// mongodb connction
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
    .then((client) => {
        console.log('Connected to MongoDB');
        db = client.db(DATABASE_NAME);
        usersCollection = db.collection('users');
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Signup
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingUser = await usersCollection.findOne({
            $or: [{ username }, { email }],
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const result = await usersCollection.insertOne({ username, email, password });
        if (!result.acknowledged) {
            return res.status(500).json({ message: 'Failed to create user' });
        }

         // email sending part
         const mailOptions = {
            from: 'jeevankumar101319@gmail.com',
            to: email,
            subject: 'Welcome to Our Platform!',
            html: `
                <h1>Welcome, ${username}!</h1>
                <p>Thank you for signing up on Nestrix. We are excited to have you with us.</p>
                <p>Feel free to explore and let us know if you have any questions.</p>
            `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(201).json({ message: 'Signup successful', user: { username, email } });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        const user = await usersCollection.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please sign up first.' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful', user: { username, email: user.email } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
/// update password
app.post('/api/reset-password', async (req, res) => {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== oldPassword) {
            return res.status(401).json({ message: 'Incorrect old password' });
        }
        const result = await usersCollection.updateOne(
            { email },
            { $set: { password: newPassword } }
        );
        if (result.modifiedCount === 0) {
            return res.status(500).json({ message: 'Failed to update password' });
        }
        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Error during password reset:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Delete Account 
app.delete('/api/delete-account', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        await usersCollection.deleteOne({ email });
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
