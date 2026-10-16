# 🛍️ Mini E-Commerce Web Application

A responsive mini e-commerce web application built to demonstrate full-stack web development, including frontend design, backend development, REST API integration, and database management.

## ✨ Features

- 🏠 **Product Homepage** — Browse and explore available products.
- 📦 **Product Details** — View individual product information.
- 🛒 **Shopping Cart** — Add products to your cart and manage quantities.
- 💳 **Demo Checkout** — Complete a sample checkout form.
- 🗄️ **Database Integration** — Store and retrieve product data using MongoDB Atlas.
- 🔌 **REST API** — Perform product operations through backend API endpoints.
- 📱 **Responsive Design** — Access the application on desktop and mobile devices.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | User interface development |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling and responsive design |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |

## 📁 Project Structure

```text
e-commerce-web-application/
├── app/                 # Frontend pages and application UI
├── components/          # Reusable UI components
├── backend/             # Express server and API routes
├── lib/                 # Shared utilities
├── public/              # Static assets
├── .env.local           # Local environment variables
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### 1. Clone the repository

```bash
git clone https://github.com/Muchaziwepi/e-commerce-web-application.git
```

Navigate into the project folder:

```bash
cd e-commerce-web-application
```

### 2. Install dependencies

```bash
npm install
```

If the project uses pnpm and includes a `pnpm-lock.yaml` file, you can instead install dependencies with:

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string. Keep your database credentials private and never commit your `.env.local` file to GitHub.

### 4. Start the frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Start the backend

In a separate terminal, run:

```bash
node backend/server.js
```

Make sure the backend is configured with the required environment variables and that the frontend uses the correct backend API URL.

## 🔗 API Endpoints

The backend is designed to support the following product operations:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Add a new product |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |

*Note: These endpoints describe the intended API structure. Ensure the corresponding routes are implemented in the backend.*

## 💳 Checkout Disclaimer

The checkout functionality is for demonstration and educational purposes only. It does not process real payments, and no payment gateway is integrated.

## 🎯 Project Goals

This project demonstrates how different technologies work together to build a full-stack web application. It provides practical experience with:

- Frontend development using React and Next.js
- Backend development using Node.js and Express
- REST API design and integration
- Database connectivity with MongoDB Atlas
- Environment variable configuration
- Responsive user interface development
- Git and GitHub project management

## 🔮 Future Improvements

- User registration and authentication
- Product search, filtering, and sorting
- Persistent shopping cart
- Order history and management
- Admin dashboard for product management
- Payment gateway integration
- Product reviews and ratings

## 📄 License

Created for educational and internship purposes.

---

**Developed by Sally Miriro Muchaziwepi** 💻

If you find this project useful, feel free to explore the repository and follow my journey in software development.
