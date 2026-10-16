# 🛍️ Mini E-Commerce Web Application

A responsive mini e-commerce web application developed as part of a learning task under the **mentorship of Invexom**. This project demonstrates the fundamentals of full-stack web development, including frontend development, backend APIs, and database integration.

## 🌟 About the Project

The Mini E-Commerce Web Application simulates a basic online shopping experience. Users can browse products, view product details, manage a shopping cart, and complete a demo checkout.

**Mentorship:** Invexom  
**Project Type:** Full-Stack Web Development  
**Purpose:** Educational and internship task

## ✨ Features

- 🏠 **Product Homepage** — Browse available products.
- 📦 **Product Details** — View individual product information.
- 🛒 **Shopping Cart** — Add products and adjust quantities.
- 💳 **Demo Checkout** — Submit a sample checkout form.
- 🗄️ **Database Integration** — Store and retrieve product data using MongoDB Atlas.
- 🔌 **REST API** — Support product operations through backend endpoints.
- 📱 **Responsive Interface** — Designed for desktop and mobile screens.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | User interface development |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling and responsive layouts |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |

## 📁 Project Structure

```text
e-commerce-web-application/
├── app/                 # Frontend pages and UI
├── components/          # Reusable components
├── backend/             # Express server and API routes
├── lib/                 # Shared utilities
├── public/              # Static assets
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm or pnpm
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### 1. Clone the repository

```bash
git clone https://github.com/Muchaziwepi/e-commerce-web-application.git
cd e-commerce-web-application
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or, if using pnpm:

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB Atlas connection string. **Never upload database credentials or secrets to GitHub.**

### 4. Run the frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run the backend

In a separate terminal:

```bash
node backend/server.js
```

Ensure the backend, database connection, and frontend API URL are configured correctly.

## 🔗 API Endpoints

The intended product API structure includes:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve one product |
| POST | `/api/products` | Add a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

*These endpoints should be verified against the routes implemented in the backend.*

## 🎓 Mentorship & Learning

This project was completed as a task under the **mentorship of Invexom**.

Working on this application provides practical experience with:

- Building user interfaces using React and Next.js
- Understanding backend development with Node.js and Express
- Designing and integrating REST APIs
- Connecting applications to MongoDB Atlas
- Managing project dependencies and environment variables
- Using GitHub to document and showcase development work

Thank you to **Invexom** for providing the opportunity to learn and apply full-stack development concepts through this task.

## 🎥 Project Demonstration

A video demonstration of the completed task will be shared on LinkedIn, acknowledging Invexom's mentorship.

**LinkedIn post:** Add your published LinkedIn post URL here.

## 🔮 Future Improvements

- User authentication and registration
- Product search and filtering
- Persistent shopping cart
- Order history
- Admin dashboard
- Product reviews and ratings
- Payment gateway integration

## ⚠️ Checkout Disclaimer

The checkout feature is for demonstration purposes only. No real payments are processed, and no payment gateway is integrated.

## 📄 License

Created for educational and internship purposes under the mentorship of Invexom.

---

**Developed by Sally Miriro Muchaziwepi** 💻

*Learning, building, and growing as a full-stack developer.*
