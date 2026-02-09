# Fantasy Battle Monorepo

This project is a monorepo for an online browser-based videogame.

## Structure
- `backend/`: Node.js + TypeScript + Express + Mongoose (MongoDB)
- `frontend/`: React + TypeScript + SCSS (Vite)
- `shared/`: Shared TypeScript types/interfaces

## Getting Started

### Backend
1. `cd backend`
2. Copy `.env` and set your MongoDB URI if needed
3. `npm run dev` (starts backend with nodemon)

### Frontend
1. `cd frontend`
2. `npm run dev` (starts Vite dev server)

### Shared
- Place shared types/interfaces in `shared/`

## Tooling
- ESLint, Prettier, Jest configured for both frontend and backend

## API Example
- Visit the frontend at http://localhost:5173
- The homepage will display a ping from the backend

---

For questions or deployment help, ask your AI assistant!
