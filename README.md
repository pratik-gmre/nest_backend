# Node.js + Express API

A backend REST API built with **Node.js**, **Express**, and **ES Modules**, following a clean and scalable project structure.  
This API is production-ready and deployed using modern cloud platforms.

---

## 📁 Project Structure
```
project/
├── src/
│ ├── app.js 
│ ├── router/ 
│ ├── controllers/ 
│ └── lib/
│ └── db.js 
├── index.js 
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

---

##  Features

- Express.js REST API
- ES Modules (`import/export`)
- Environment variable support using `dotenv`
- CORS enabled
- Clean separation of concerns (`app.js` vs `index.js`)
- Database connection before server startup
- Deployment-ready configuration

---

##  Architecture Overview

- **`app.js`**  
  Responsible for configuring the Express app:

  - Routes


- **`index.js`**  
  Application entry point:
  - Loads environment variables
  - Connects to the database
  - Starts the HTTP server

This separation makes the app easier to test, scale, and deploy.

---

## ⚙️ Prerequisites

- Node.js v18+  
- npm or yarn  
- A cloud database (MongoDB Atlas / PostgreSQL / etc.)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```bash
PORT=8000
DB_URL=your_database_connection_string
```

Clone this repository
```bash
git clone https://github.com/pratik-gmre/nest_backend.git
cd nest_backend
npm install


npm start
```


## Api
- POST = /api/leaderboard?limit=10
- Example : {"agentId":"12368","agentName":"sudeep Khan","amountSold":4,"salesCount":2}



```md
## Curl 
- curl -X POST "https://nest-backend-dw5j.onrender.com/api/leaderboard?limit=10" \
-H "Content-Type: application/json" \
-d '{"agentId":"12368","agentName":"Sudeep Khan","amountSold":46,"salesCount":2}'







