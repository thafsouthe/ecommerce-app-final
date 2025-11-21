# 🛒 E-Commerce Frontend

A modern, responsive e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**.  
This project focuses on the frontend of an online electronics store where users can browse products, add them to the cart, and place orders.  
The app provides a clean and fast user experience with reusable components and a well-structured architecture.

---

## 🚀 Features

- **Product Browsing:** Explore a variety of electronics including laptops, consoles, phones, smartwatches, and controllers.  
- **Dynamic Pages:** Fully functional pages for Home, About, Contact, Cart, Login, Orders, Collection, Product Details, and more.  
- **Shopping Cart System:** Add, update, and remove items easily.  
- **Context API State Management:** Centralized data flow for products and cart using React Context.  
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.  
- **Reusable Components:** Modular architecture for scalability and easy maintenance.  
- **Fast Build System:** Powered by Vite for lightning-fast development and hot reload.

---

## 🧱 Tech Stack

- **Frontend Framework:** [React](https://react.dev/)  
- **Build Tool:** [Vite](https://vitejs.dev/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **State Management:** React Context API  
- **Routing:** [React Router](https://reactrouter.com/)  
- **Linting:** ESLint  
- **Package Manager:** npm  

---

## 📁 Folder Structure

```

frontend/
│
├── public/                 # Static assets (images, icons, etc.)
│
├── src/
│   ├── assets/             # Images and media used in the app
│   ├── components/         # Reusable UI components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   │
│   ├── context/            # Global state (ShopContext)
│   │   └── ShopContext.jsx
│   │
│   ├── pages/              # Main app pages
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   └── Product.jsx
│   │
│   ├── App.jsx             # Root component with routes
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

````

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app/frontend
````

2. **Install dependencies**

   ```bash
   npm install
````
3. **Run the development server**

   ```bash
   npm run dev
   ```
4. **Open the app**

   * Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🧩 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Starts the development server     |
| `npm run build`   | Builds the app for production     |
| `npm run preview` | Previews the production build     |
| `npm run lint`    | Runs ESLint to check code quality |

---

## 🖼️ UI Overview

The frontend includes:

* A **clean homepage** with product highlights and categories.
* A **Navbar** for easy navigation.
* A **Cart system** that updates dynamically.
* **Product detail pages** for individual items.
* Informative **About** and **Contact** pages.
* A **responsive layout** that adapts to all screen sizes.

---

## 📚 Project Goals

This project aims to:

* Build a scalable and maintainable e-commerce frontend.
* Demonstrate modern React development with Context API and Tailwind CSS.
* Provide a solid foundation for backend or API integration in the future.

---

## 🧑‍💻 Author

**Thafsouthe Hassani**
Full Stack Developer : Passionate about building scalable web applications with modern frontend and backend technologies.
[GitHub Profile](https://github.com/thafsouthe)

---

## ⚡ Built With

This project was initialized using [Vite](https://vitejs.dev/) and [React](https://react.dev/),
providing fast development, Hot Module Replacement (HMR), and modern build optimizations.

---

