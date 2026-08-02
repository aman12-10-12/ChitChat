# ChitChat 💬
A real time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io.

## Status
- In active development.
- [x] Backend authentication is complete.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Real time:** Socket.io
- **Media storage:** Cloudinary
- **Auth:** JWT

## Backend Setup
1. `cd server`
2. `npm install`
3. Copy `.env.example` to `.env` and fill in:
   - `PORT`
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
4. `npm run server` (dev, with nodemon) or `npm start`

## API — Auth Routes
| Method | Route | Description | Auth required |
|---|---|---|---|
| POST | `/api/auth/signup` | Register a new user | No |
| POST | `/api/auth/login` | Log in existing user | No |
| GET | `/api/auth/check` | Check current session | Yes |
| PUT | `/api/auth/update-profile` | Update name, bio, profile picture | Yes |

## Roadmap
- [x] Backend — user auth
- [ ] Frontend — user auth
- [ ] Backend — real-time messaging
- [ ] Frontend — real-time messaging
