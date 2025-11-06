const http = require('http');
const { MongoClient } = require('mongodb');
const { parse } = require('url');
const PORT = 8088;
const MONGO_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'myApp';

let db;
let projectsCollection;

// MongoDB connection
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true })
    .then((client) => {
        console.log('Connected to MongoDB');
        db = client.db(DATABASE_NAME);
        projectsCollection = db.collection('projects');
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Server creation
const server = http.createServer(async (req, res) => {
    const { pathname } = parse(req.url, true);

    // Handle CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Preflight request for CORS
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (pathname === '/projects' && req.method === 'GET') {
        try {
            const projects = await projectsCollection.find().toArray();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(projects));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error fetching projects', error }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
