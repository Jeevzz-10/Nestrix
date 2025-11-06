const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8089;
const MONGO_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'myApp';
const COLLECTION_NAME = 'bookings'; 

let bookingsCollection;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//mongodb connection
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
    .then((client) => {
        console.log('Connected to MongoDB for Bookings');
        const db = client.db(DATABASE_NAME);
        bookingsCollection = db.collection(COLLECTION_NAME);
        app.listen(PORT, () => {
            console.log(`Booking Backend is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error));
    
app.post('/api/book-meeting', async (req, res) => {
    const { name, date, timeSlot, location, paymentMethod } = req.body;
    console.log('Request body:', req.body);
    if (!name || !date || !timeSlot || !location || !paymentMethod) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const result = await bookingsCollection.insertOne({
            name,
            date,
            timeSlot,
            location,
            paymentMethod,
        });
        if (result.acknowledged) {
            res.status(201).json({
                message: 'Booking successfully added!',
                booking: {
                    _id: result.insertedId,
                    name,
                    date,
                    timeSlot,
                    location,
                    paymentMethod,
                },
            });
        } else {
            res.status(500).json({ message: 'Failed to add booking' });
        }
    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).json({ message: 'Error adding booking', error });
    }
});

app.get('/api/book-meetings', async (req, res) => {
    try {
        const bookings = await bookingsCollection.find().toArray();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

app.delete('/api/book-meetings', async (req, res) => {
    try {
        const result = await bookingsCollection.deleteMany({});
        res.status(200).json({ message: 'All bookings cleared!' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing bookings', error });
    }
});
