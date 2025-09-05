
# Car Parking System

A full-stack MERN application for managing a car parking system. This application provides a seamless experience for both users and administrators, featuring real-time updates and a clean, modern interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- **User Authentication:** Secure user registration and login with JWT-based authentication.
- **Parking Management:** Users can park their cars and receive a virtual ticket.
- **Exit Management:** Users can exit the parking lot, and the system will update the available slots.
- **Admin Dashboard:** A comprehensive dashboard for administrators to view all parked cars and registered users in real-time.
- **Image Uploads:** Users can upload an image of their car when parking, which is stored using Cloudinary.
- **Real-time Updates:** The system uses Socket.io for real-time communication between the client and server.

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **React Router:** For declarative routing in React applications.
- **Socket.io Client:** For real-time, bidirectional event-based communication.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A cross-platform document-oriented database program.
- **Mongoose:** An elegant MongoDB object modeling tool for Node.js.
- **JSON Web Token (JWT):** For secure user authentication.
- **Cloudinary:** A cloud-based service for image and video management.
- **Socket.io:** For real-time, bidirectional event-based communication.
- **Multer:** Middleware for handling `multipart/form-data`, used for uploading files.

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the React application.
- `backend/`: Contains the Node.js and Express server.

```
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── mongodb/
│   ├── router/
│   ├── src/
│   └── ...
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── Pages/
    │   └── ...
    └── ...
```

## API Endpoints

The following are the main API endpoints available in the backend:

| Method | Endpoint               | Description                      |
|--------|------------------------|----------------------------------|
| POST   | `/api/newparking`      | Park a new car.                  |
| POST   | `/api/exitparking`     | Exit a car from the parking lot. |
| GET    | `/api/getparkedcars`   | Get a list of all parked cars.   |
| GET    | `/api/getparkedclients`| Get a list of all registered users.|
| POST   | `/api/login`           | Log in a user.                   |
| POST   | `/api/newuser`         | Register a new user.             |
| POST   | `/api/logout`          | Log out a user.                  |

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Backend Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/damodara2006/Car-Parking-System.git
    cd Car-Parking-System/backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory and add the necessary environment variables (see [Environment Variables](#environment-variables)).

4.  **Start the server:**
    ```sh
    npm run dev
    ```
    The server will start on `http://localhost:8080`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```sh
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Environment Variables

The backend requires the following environment variables to be set in a `.env` file in the `backend` directory.

```
PORT=8080
MONGODB_URI=<your_mongodb_connection_string>
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=<your_access_token_secret>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```
