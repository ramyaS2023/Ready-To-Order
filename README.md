🛒 MERN Stack E-Commerce Project

A full-featured MERN Stack e-commerce application built with modern technologies.
It includes product management, user authentication, image uploads, secure payments using Stripe, and deployment on Vercel (frontend) and Render (backend).


🚀 Tech Stack

Frontend:

React.js

Redux Toolkit

Axios

React Router DOM

Tailwind CSS / Bootstrap

Backend:

Node.js

Express.js

MongoDB (Mongoose)

Multer (File Uploads)

Stripe (Payment Integration)

JWT Authentication

Deployment:

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

✨ Features

✅ User Authentication – Signup, Login, Logout using JWT
✅ Admin Dashboard – Manage products, orders, and users
✅ Product Management – Add, edit, delete, and view products
✅ Image Upload – Upload product images using Multer
✅ Stripe Payment Gateway – Secure online payments
✅ Shopping Cart – Add/remove products, quantity update
✅ Order History – Track all user orders
✅ Responsive UI – Works on all devices
✅ Deployed – Frontend (Vercel) & Backend (Render)

📁 Folder Structure
MERN-Project/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── uploads/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/ramyaS2023/Ready-To-Order.git
cd mern-ecommerce

2️⃣ Backend setup
cd backend
npm install





Start the backend server:

npm run dev

3️⃣ Frontend setup
cd ../frontend
npm install


Create a .env file inside frontend:

REACT_APP_BACKEND_URL=https://your-backend-on-render.com
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_publishable_key


Start the frontend:

npm start

🧾 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login user
GET	/api/products	Fetch all products
POST	/api/products	Add new product (Admin)
POST	/api/upload	Upload product image
POST	/api/create-checkout-session	Create Stripe payment session
💳 Stripe Integration

Stripe is used for secure payments.

On checkout, the frontend sends cart data to the backend API /api/create-checkout-session, which returns a Stripe Checkout URL.

After successful payment, the order is saved to MongoDB.

🖼️ Image Upload (Multer)

Images are uploaded via Multer middleware to the /uploads folder.

The path is stored in MongoDB and displayed on the frontend.

	
	
📬 Contact

👤 Your Ramya
📧 your.ramya@gmail.com

🔗 LinkedIn
 | https://github.com/ramyaS2023/

