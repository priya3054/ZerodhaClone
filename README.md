# 🚀 Zerodha Clone – Real-Time Trading Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio)
![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?style=for-the-badge&logo=razorpay)

A full-stack real-time trading dashboard inspired by Zerodha, built using the MERN stack.

This project simulates the core functionalities of a modern stock trading platform including:

- 🔐 Authentication & Session Management
- ⚡ Real-Time Stock Updates using Socket.IO
- 💳 Razorpay Payment Gateway Integration
- 📈 Portfolio & Holdings Management
- 📊 Interactive Chart Visualizations
- 🧠 Context API State Management
- 🗄️ MongoDB Database Architecture

---

# 🌟 Features

## 🔐 Authentication System
- User Signup/Login
- Session-based Authentication using Passport.js
- Secure password hashing & salting
- Protected backend routes
- Persistent login using cookies & sessions

---

## ⚡ Real-Time Watchlist
- Live stock price updates using Socket.IO
- Event-driven architecture
- Dynamic watchlist rendering
- Real-time chart updates
- Shared socket connection using Context API

---

## 💳 Razorpay Payment Integration
- Secure wallet funding system
- Razorpay checkout integration
- Backend payment verification using HMAC SHA256
- Real-time balance synchronization after successful payment

---

## 📊 Trading Dashboard
- Holdings management
- Position tracking
- Order management
- Profit/Loss calculations
- Interactive chart visualizations

---

## ⚛️ Frontend Architecture
- Component-based React architecture
- Nested routing using React Router
- Context API for global state management
- Dynamic rendering using React Hooks
- Modular & scalable frontend structure

---

# 🏗️ System Architecture

```mermaid
flowchart TD

A[React Frontend] --> B[Express Backend]

B --> C[MongoDB]
B --> D[Razorpay API]
B --> E[Socket.IO Server]

E --> A
```

---

# 🔐 Authentication Flow

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Backend
participant MongoDB

User->>Frontend: Login Request

Frontend->>Backend: Send Credentials

Backend->>MongoDB: Verify User

MongoDB-->>Backend: User Found

Backend-->>Frontend: Session Cookie

Frontend-->>User: Login Successful
```

---

# ⚡ Real-Time Watchlist Flow

```mermaid
flowchart LR

A[Backend Emits Prices] --> B[Socket.IO]

B --> C[Frontend Listener]

C --> D[React State Update]

D --> E[UI Re-render]

E --> F[Chart Updates]
```

---

# 💳 Razorpay Payment Flow

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Backend
participant Razorpay

User->>Frontend: Click Add Funds

Frontend->>Backend: Create Order Request

Backend->>Razorpay: Create Razorpay Order

Razorpay-->>Backend: Order Details

Backend-->>Frontend: Send Order Data

Frontend->>Razorpay: Open Checkout

User->>Razorpay: Complete Payment

Razorpay-->>Frontend: Payment Response

Frontend->>Backend: Verify Payment

Backend->>Backend: Verify HMAC Signature

Backend->>MongoDB: Update User Balance

Backend-->>Frontend: Payment Success

Backend->>Frontend: Emit balance-update via Socket.IO
```

---

# 📂 Project Structure

```bash
ZerodhaClone/
│
├── backend/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── schemas/
│   ├── index.js
│
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│
├── frontend/
│   ├── src/
│   │   ├── landing_page/
│
├── README.md
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Context API
- Material UI
- Chart.js

---

## Backend
- Node.js
- Express.js
- Passport.js
- Socket.IO

---

## Database
- MongoDB
- Mongoose ODM

---

## Payment Gateway
- Razorpay

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/ZerodhaClone.git
```

---

# 📦 Install Dependencies

## Backend

```bash
cd backend
npm install
```

---

## Dashboard

```bash
cd dashboard
npm install
```

---

## Frontend

```bash
cd frontend
npm install
```

---

# ▶️ Run Project

## Start Backend

```bash
npm start
```

---

## Start Dashboard

```bash
npm start
```

---

## Start Frontend

```bash
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URL=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

# 🧠 Key Engineering Concepts Used

- REST APIs
- Event-Driven Architecture
- Real-Time Communication
- Socket.IO
- React Reconciliation
- Context API
- Session-Based Authentication
- Payment Gateway Integration
- HMAC Signature Verification
- MongoDB Schema Design
- Secure Password Hashing
- React Hooks
- Dynamic State Management

---

# 🚧 Future Improvements

- Redis Pub/Sub for scalable Socket.IO broadcasting
- Webhook-based payment verification
- Advanced analytics dashboard
- Docker deployment
- CI/CD integration
- Order acknowledgement system
- Advanced portfolio insights
- Production-grade caching

---

# 👩‍💻 Author

## Priya R

Full Stack Developer | MERN Stack | Real-Time Systems Enthusiast

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!