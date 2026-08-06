# ChitChat

A real-time chat application built with the MERN stack and Socket.io.

## Overview

ChitChat is a two-part project with:
- A React + Vite frontend in `client/`
- An Express + MongoDB backend in `server/`
- Real-time messaging using Socket.io
- User authentication with JWT
- Profile updates and image uploads via Cloudinary

## Repository Structure

- `client/` — React frontend, routing, chat UI, and socket client
- `server/` — Express backend, API routes, MongoDB models, and Socket.io server
- `README.md` — root documentation and high-level setup

## Quick Start

1. Install dependencies for backend and frontend:
   - `cd server && npm install`
   - `cd ../client && npm install`
2. Configure environment variables:
   - Copy `server/.env.example` to `server/.env`
   - Copy `client/.env.example` to `client/.env`
3. Start the backend server:
   - `cd server && npm run server`
4. Start the frontend app:
   - `cd ../client && npm run dev`
5. Open the frontend URL shown by Vite, usually `http://localhost:5173`

## Development Notes

- Backend server listens on the port defined by `PORT` in `server/.env`, or `5000` by default.
- Frontend uses `VITE_BACKEND_URL` from `client/.env` to connect to the backend and Socket.io.
- The client and server run independently; make sure the backend is running before signing in.

## More Documentation

- See `client/README.md` for frontend setup, features, and environment details.
- See `server/README.md` for backend setup, API docs, environment variables, and socket events.

## License

ISC
