# ChitChat Frontend

The frontend application for ChitChat is built with React and Vite. It provides the user interface for login, profile management, messaging, and online presence.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- Socket.io Client
- React Hot Toast

## Folder Structure

- `src/`
  - `components/` — chat UI, sidebar, and page components
  - `context/` — `AuthContext`, `ChatContext`, authentication and socket logic
  - `pages/` — `HomePage`, `LoginPage`, `ProfilePage`
  - `assets/` — static image and icon references
  - `lib/` — helper utilities like time formatting

## Setup

1. Install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env
   ```
3. Update `client/.env`:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — Start Vite development server
- `npm run build` — Build production assets
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint on the project

## Environment Variables

- `VITE_BACKEND_URL` — Backend API and Socket.io server URL

## Key Features

- Login and signup flows
- Protected routes using authentication state
- Real-time one-to-one chat
- Online user presence
- Message list caching and unseen badge counts
- Profile updates with Cloudinary image upload support

## Backend Integration

The frontend uses Axios with the base URL from `VITE_BACKEND_URL`. Protected API requests include a JWT token in the `token` header.

### Important Endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/check`
- `PUT /api/auth/update-profile`
- `GET /api/messages/users`
- `GET /api/messages/:id`
- `POST /api/messages/send/:id`
- `DELETE /api/messages/:id`

## Notes

- Ensure the backend is running and reachable at `VITE_BACKEND_URL` before using the app.
- The login page supports both sign-up and sign-in states.
