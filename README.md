# ChitChat 💬

A real time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io.

## Status
Feature complete: auth, profiles, and real time messaging with media sharing.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Real-time:** Socket.io
- **Media storage:** Cloudinary
- **Auth:** JWT

## Project Structure

## Project Structure

ChitChat/ ├── client/ # React frontend │ └── src/ │ ├── components/ # Sidebar, ChatContainer, RightSidebar │ ├── context/ # AuthContext, ChatContext │ ├── pages/ # LoginPage, ProfilePage, HomePage │ └── lib/ # utils └── server/ # Express backend ├── controllers/ # userController, messageController ├── models/ # User, Message ├── routes/ # userRoutes, messageRoutes ├── middleware/ # auth └── lib/ # db, cloudinary, utils

## Setup

### Backend
1. `cd server && npm install`
2. Copy `.env.example` → `.env` and fill in `PORT`, `MONGO_URI`, `JWT_SECRET`, Cloudinary keys
3. `npm run server`

### Frontend
1. `cd client && npm install`
2. Copy `.env.example` → `.env` and set the backend URL
3. `npm run dev`

## Features
- Sign up / sign in with JWT sessions
- Profile editing with Cloudinary photo upload
- Real time one to one chat via Socket.io
- Live online/offline presence
- Image sharing in chat
- Message delete (desktop dropdown + mobile long-press menu)
- Shared media gallery per conversation
- Responsive layout — same codebase for desktop and mobile

## API Reference
See sections above for `/api/auth/*` and `/api/messages/*` routes.

## License
ISC
