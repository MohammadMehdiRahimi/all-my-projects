# 🚀 Simple Blog Project

A full-stack blog application featuring user authentication, post management, and profile settings. Developed using modern web technologies.

## 🔧 Features

- 💡 User registration and login system
- 📝 Create, Read, Update, and Delete (CRUD) operations for blog posts
- 🖼️ Image uploads for posts and user profiles
- ⚙️ User profile settings and account management
- 📱 Frontend built with React and Vite
- 💾 Backend powered by Node.js, Express, and MySQL
- 💅 Styling with Bootstrap
- 🔁 State management with Redux Toolkit

---

## 🛠️ Tech Stack

**Frontend:**

- ⚛️ React
- ⚡ Vite
- 💾 Redux Toolkit
- 🌐 Axios
- 🧭 React Router DOM
- 💅 Bootstrap & Custom CSS
- 🔔 React Hot Toast / React Toastify
- 🍪 JS Cookie / React Cookie
- ✔️ Joi (for validation)

**Backend:**

- 🏃 Node.js
- ⚙️ Express.js
- 🐬 MySQL2
- 🔑 JSON Web Token (JWT) for authentication
- 🔒 Bcrypt for password hashing
- 🔄 CORS
- 🖼️ Multer for file uploads
- 🤫 Dotenv for environment variables

---

## 📦 Installation

Follow these steps to run the project locally:

**Prerequisites:**

- Node.js installed
- NPM or Yarn installed
- MySQL server running

**Backend Setup:**

````bash
# 1. Clone the repository (replace with your actual repo URL)
git clone https://github.com/MohammadMehdiRahimi/simpleBolg
cd simpleBlog/backend

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env file in the backend directory and add your database credentials:
# DB_HOST=127.0.0.1
# DB_USER=root
# DB_PASS=your_mysql_password
# DB_DATABASE=blog
# PORT=3003
# TJTJ=your_jwt_secret_key

# 4. Start the backend server
npm start
Frontend Setup:

Bash

# 1. Navigate to the frontend directory (from the root simpleBlog folder)
cd ../frontend
# or from the backend folder: cd ../frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
The frontend should now be running, usually on http://localhost:5173 (Vite's default) or another port specified by Vite.

## Folder Structure
``` bash
simpleBlog/
├── backend/
│   ├── controller/
│   │   └── Controller.js
│   ├── models/
│   │   ├── connection.js
│   │   └── models.js
│   ├── routes/
│   │   └── router.js
│   ├── File/
│   │   ├── PostImage/
│   │   └── ProfileImage/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── css/
│   │   │   ├── bootstrap.css
│   │   │   └── _reset.css
│   │   └── images/ (Assumed based on paths in CSS)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Add/
│   │   │   ├── Dashboard/
│   │   │   ├── EditPost/
│   │   │   ├── Header/
│   │   │   ├── Home/
│   │   │   ├── Loading/
│   │   │   ├── Login/
│   │   │   ├── PageNotFound/
│   │   │   ├── Register/
│   │   │   ├── Setting/
│   │   │   ├── Single/
│   │   │   └── TopBar/
│   │   ├── Redux/
│   │   │   ├── auth/
│   │   │   │   └── authSlice.js
│   │   │   ├── errors/
│   │   │   │   └── errors.slice.js
│   │   │   ├── profileDetails/
│   │   │   │   └── profileSlice.js
│   │   │   └── store.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │   └── Test.jsx
│   ├── routes/
│   │   └── router.jsx
│   ├── constance/
│   │   └── constance.js
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
└── README.md
````

## 🤝 Contributing

Contributions are welcome! If you have any ideas, feedback, or improvements in mind, feel free to:

```bash
Fork the project
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add your message')
Push to the branch (git push origin feature/your-feature)
Open a Pull Request
```

## ✨ Final Words

"Keep coding, keep learning."
This project demonstrates a simple yet functional full-stack blog implementation.
