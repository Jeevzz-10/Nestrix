# Nestrix - Interior Design Agency Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for "Nestrix," a fictional interior designing agency.

## 📋 Features

* **Homepage:** A stunning landing page to attract potential clients.
* **Portfolio Gallery:** Browse through different design projects (e.g., residential, commercial).
* **Services Page:** Details on the services offered, from consultation to full-scale design.
* **Contact Form:** A functional contact form for new business inquiries (connects to the backend).
* **Admin Panel (Optional):** A secure area for the admin to upload new projects or manage inquiries.

## 🛠️ Tech Stack

### Frontend (Client)
* **React:** A JavaScript library for building user interfaces.
* **CSS:** (Add your CSS solution here - e.g., CSS Modules, Styled Components, Tailwind CSS)

### Backend (Server)
* **Node.js:** A JavaScript runtime environment.
* **Express.js:** A web application framework for Node.js, used to build the REST API.
* **MongoDB:** A NoSQL database used to store project data and contact inquiries.
* **Mongoose:** An ODM (Object Data Modeling) library for MongoDB.

## 🏁 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You must have the following installed on your system:
* [Node.js](https://nodejs.org/) (which includes npm)
* [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Jeevzz-10/Nestrix.git](https://github.com/Jeevzz-10/Nestrix.git)
    cd Nestrix
    ```

2.  **Install Frontend Dependencies:**
    (This installs all the React packages from `package.json`)
    ```sh
    npm install
    ```

3.  **Install Backend Dependencies:**
    (This installs all the server packages from `server/package.json`)
    ```sh
    cd server
    npm install
    cd ..
    ```

4.  **Set up Environment Variables:**
    The server needs a `.env` file to connect to the database.
    * Create a file named `.env` inside the `/server` folder.
    * Add your MongoDB connection string to it:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

### 🏃‍♂️ Running the Application

You'll need to run both the frontend and backend servers simultaneously.

1.  **Run the Backend (Server):**
    Open a terminal and navigate to the `/server` directory.
    ```sh
    cd server
    npm start
    # Your server will start, usually on http://localhost:5000
    ```

2.  **Run the Frontend (Client):**
    Open a *second* terminal and stay in the root `Nestrix` directory.
    ```sh
    npm start
    # Your React app will open in the browser at http://localhost:3000
    ```

The application should now be running! The React app on port 3000 will automatically communicate with the Express server on port 5000.


`![Nestrix Homepage](./path/to/your/screenshot.png)`
