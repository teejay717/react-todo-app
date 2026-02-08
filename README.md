# MERN Todo-App

A clean, modern full-stack to-do list application built with React, Express, and MongoDB.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

## ✨ Features

- ➕ **Add Tasks** - Quickly add new tasks with the input field or press Enter
- ✏️ **Edit Tasks** - Click "Edit" to modify any existing task
- ✅ **Mark Complete** - Check off tasks when finished
- 🗑️ **Delete Tasks** - Remove individual tasks with the trash button
- 🧹 **Clear Completed** - Remove all completed tasks at once
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 💾 **Persistent Storage** - Tasks are stored in MongoDB database

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Set up the backend:
   - Navigate to your backend directory
   - Create a `.env` file with your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```
   - Install backend dependencies and start the server on port 5000

4. Start the frontend development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🔌 API Endpoints

| Method | Endpoint                     | Description          |
| ------ | ---------------------------- | -------------------- |
| GET    | `/api/todos`                 | Get all todos        |
| POST   | `/api/todos`                 | Create a new todo    |
| PUT    | `/api/todos/:id`             | Update a todo        |
| DELETE | `/api/todos/:id`             | Delete a todo        |
| DELETE | `/api/todos/clear-completed` | Delete all completed |

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🛠️ Built With

- **[React](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Font Awesome](https://fontawesome.com/)** - Icons
- **[Express](https://expressjs.com/)** - Backend framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling

## 📁 Project Structure

```
react-todo-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FilterButtons.jsx   # Filter tabs (All/Active/Completed)
│   │   ├── TaskCard.jsx        # Main container component
│   │   ├── TaskInput.jsx       # Input field for new tasks
│   │   └── TaskList.jsx        # Task list with edit/delete functionality
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
