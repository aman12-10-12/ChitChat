# ChitChat 💬
A real time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io.

## Status
- [x] In active development.
- [x] Backend authentication complete.
- [x] Frontend authentication complete.
- [x] Backend real-time messaging complete.


## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Real-time:** Socket.io
- **Media storage:** Cloudinary
- **Auth:** JWT

## Project Structure

## Backend Setup
1. `cd server`
2. `npm install`
3. Copy `.env.example` to `.env` and fill in:
   - `PORT`
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
4. `npm run server` (dev, with nodemon) or `npm start`

## Frontend Setup
1. `cd client`
2. `npm install`
3. Copy `.env.example` to `.env` and set `VITE_BACKEND_URL` to your backend URL
4. `npm run dev`

## Features so far
- Sign up / sign in with a two step form (details → bio)
- JWT-based session persistence
- Profile editing with photo upload
- Terms and conditions gate on signup

## API — Auth Routes
| Method | Route | Description | Auth required |
|---|---|---|---|
| POST | `/api/auth/signup` | Register a new user | No |
| POST | `/api/auth/login` | Log in existing user | No |
| GET | `/api/auth/check` | Check current session | Yes |
| PUT | `/api/auth/update-profile` | Update name, bio, profile picture | Yes |

## API — Message Routes
| Method | Route | Description | Auth required |
|---|---|---|---|
| GET | `/api/messages/users` | Get all users + unseen message counts | Yes |
| GET | `/api/messages/:id` | Get messages with a specific user | Yes |
| POST | `/api/messages/send/:id` | Send a text or image message | Yes |
| DELETE | `/api/messages/:id` | Delete a message | Yes |


## Real time
Socket.io tracks connected users in an in-memory `userSocketMap` and broadcasts `getOnlineUsers` on connect/disconnect, so clients see live online status without polling.

## Roadmap
- [x] Backend — user auth
- [x] Frontend — user auth
- [x] Backend — real time messaging
- [ ] Frontend — real- ime messaging
