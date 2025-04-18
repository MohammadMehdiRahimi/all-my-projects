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

```bash
# 1. Clone the repository (replace with your actual repo URL)
git clone https://github.com/your-username/simpleBlog.git
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
```

bash \n # Clone the repository \n git clone https://github.com/MohammadMehdiRahimi/gemini_clone.git \n\n # Navigate into the project directory \n cd gemini_clone \n\n # Install dependencies \n npm install \n\n # Start the development server \n npm run dev \n \n ## Folder Structure \n\n gemini_clone/ \nbash \n \u251C\u2500\u2500 public/ \n \u2502 \u00A0 \u2514\u2500\u2500 index.html \n \u251C\u2500\u2500 src/ \n \u2502 \u00A0 \u251C\u2500\u2500 assets/ \n \u2502 \u00A0 \u251C\u2500\u2500 components/ \n \u2502 \u00A0 \u251C\u2500\u2500 pages/ \n \u2502 \u00A0 \u251C\u2500\u2500 App.jsx \n \u2502 \u00A0 \u251C\u2500\u2500 index.js \n \u2502 \u00A0 \u2514\u2500\u2500 main.jsx (if using Vite) \n \u251C\u2500\u2500 package.json \n \u2514\u2500\u2500 README.md \n ```\n\n ## \U0001F91D Contributing \n\n Contributions are welcome! \n If you have any idea, feedback, or improvement in mind, feel free to: \n\n Fork the project \n\n Create a new branch (git checkout -b feature/your-feature) \n\n Commit your changes (git commit -m 'Add your message') \n\n Push to the branch (git push origin feature/your-feature) \n\n Open a Pull Request \n\n ## \U0001F31F A Note from the Developer \n\n\n Built with \U0001F49A by Mohammad Mehdi Rahimi \n If you like this project, feel free to \u2B50\uFE0F the repository and follow me on GitHub \n\n ## \u2728 Final Words \n "The best way to learn is to build." \n This project is a testament to continuous growth, consistency, and the beauty of clean UI.', source_references=[ContentFetcher.SourceReference(id='uploaded:ALL')]))&lt;ctrl98>
Okay, here is a README.md file for your`simpleBlog` project, modeled after the example you provided. It includes information gathered from the project files you uploaded.

Markdown

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
git clone https://github.com/your-username/simpleBlog.git
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
