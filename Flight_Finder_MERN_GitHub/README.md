# Flight Finder: Navigating Your Air Travel Options

Educational MERN prototype reconstructed from the supplied Flight Finder project report and frontend reference. This is a new implementation, not a recovered original submission. It uses fictional recurring flight schedules and fares, not live airline inventory. No booking or payment is supported.

## Features
- Search by source, destination, date and passenger count.
- Compare airline, departure, arrival, duration and per-person/total INR fare.
- Filter by airline and sort by price; responsive Bootstrap interface.
- Express REST API with validation and optional MongoDB persistence.

## Run locally
Requires Node.js 20+ (22 recommended) and npm. MongoDB is optional for demo mode.

Terminal 1:
```sh
cd server
npm install
npm start
```
Terminal 2:
```sh
cd client
npm install
npm run dev
```
Open http://localhost:5173. Search Hyderabad to Delhi on a current or future date. The default API uses 60 generated sample records covering five airports. All schedules repeat on every valid date for demonstration only.

## MongoDB mode
Start a local MongoDB instance. Copy `server/.env.example` to `server/.env` and uncomment `MONGO_URI`. From `server`, run `npm run seed`, then `npm start`. Seed operations upsert sample records. Do not commit `.env` or credentials. For a different API URL, set `VITE_API_URL` in `client/.env` and configure `CLIENT_ORIGIN` on the server.

## API
- `GET /api/health`: service status and storage mode.
- `POST /api/searchFlights`: JSON body, e.g. `{"from":"HYD","to":"DEL","date":"2099-01-01","passengers":2}`. Returns matching flight objects or a validation error.

## Architecture
React + Axios → Express REST API → sample data or MongoDB via Mongoose.

## Tests
From `server`, run `npm test` for route matching, fare calculation, invalid inputs and empty inventory. From `client`, run `npm run build` after installing dependencies.

## Limitations and future scope
Demo prices, airline names and schedules do not represent actual services. Future work: live flight API integration, authentication, saved searches, booking and payments.
