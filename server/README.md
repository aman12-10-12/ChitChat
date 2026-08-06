# ChitChat Backend

The backend for ChitChat is an Express server with MongoDB, JWT authentication, and Socket.io for real-time messaging.

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- Socket.io
- JSON Web Tokens (JWT)
- Cloudinary for profile image uploads
- CORS
- dotenv

## Folder Structure

- `controllers/` — request handlers for auth and messaging
- `models/` — Mongoose models for `User` and `Message`
- `routes/` — `userRoutes` and `messageRoutes`
- `middleware/` — authentication middleware
- `lib/` — database, Cloudinary config, and utility functions
- `server.js` — app entrypoint and Socket.io setup

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env
   ```
3. Update `server/.env` with your values:
   ```env
   MONGODB_URI=""
   PORT=5000
   JWT_SECRET=""
   CLOUDINARY_CLOUD_NAME=""
   CLOUDINARY_API_KEY=""
   CLOUDINARY_API_SECRET=""
   ```
4. Start the backend:
   ```bash
   npm run server
   ```

## Available Scripts

- `npm run server` — Run the server with `nodemon`
- `npm start` — Run the server with `node`

## API Reference

### Authentication

- `POST /api/auth/signup`
  - Request body: `{ fullName, email, password, bio }`
  - Response: user data and JWT token

- `POST /api/auth/login`
  - Request body: `{ email, password }`
  - Response: user data and JWT token

- `GET /api/auth/check`
  - Requires `token` header
  - Response: authenticated user data

- `PUT /api/auth/update-profile`
  - Requires `token` header
  - Request body: `{ profilePic, bio, fullName }`
  - Response: updated user data

### Messages

- `GET /api/messages/users`
  - Requires `token` header
  - Returns list of other users, last message timestamps, and unseen counts

- `GET /api/messages/:id`
  - Requires `token` header
  - Returns the conversation between the logged-in user and user `:id`

- `PUT /api/messages/mark/:id`
  - Requires `token` header
  - Marks a message as seen by ID

- `POST /api/messages/send/:id`
  - Requires `token` header
  - Request body: `{ text, image }`
  - Sends a message to user `:id`

- `DELETE /api/messages/:id`
  - Requires `token` header
  - Soft deletes a message created by the authenticated user

## Socket.io Events

- Connect with query: `userId`
- Server broadcasts `getOnlineUsers` when users connect/disconnect
- Server emits `newMessage` to the receiver when a message is sent
- Server emits `messageDeleted` to update deleted messages in real time

## Notes

- The server emits Socket.io events using a global `userSocketMap` to track connected sockets.
- The backend uses `express.json({ limit: '5mb' })` for payload parsing, allowing image uploads encoded as data URLs.
- `CORS` is configured to allow all origins for development.
