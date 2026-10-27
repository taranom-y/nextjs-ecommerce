# VELORA

**VELORA** is a modern, responsive clothing e-commerce website built with Next.js, TypeScript, and Tailwind CSS. It provides a user-friendly shopping experience for exploring clothing products and brands.

## Features

- **Responsive Design:** A responsive interface designed for desktop and mobile devices.
- **Hero Section:** An engaging homepage section introducing the store.
- **Product Listings:** Browse clothing products fetched from the DummyJSON API.
- **Brand Browsing:** Explore brands dynamically based on available product data.
- **Brand-Specific Products:** View products associated with a selected brand.
- **Product Ratings:** Display product ratings using star icons.
- **Customer Reviews:** Browse customer reviews in a carousel.
- **Product Search:** Search for products by title, category, or brand.
- **Shopping Cart:** Add products to the cart and manage item quantities.
- **Global State Management:** Manage cart state using Zustand.
- **Data Fetching and Caching:** Use TanStack Query to fetch and cache product data.

## Technologies

- **Next.js** — React framework for building web applications.
- **React** — Component-based user interface development.
- **TypeScript** — Static typing for more reliable code.
- **Tailwind CSS** — Utility-first CSS framework for styling.
- **TanStack Query (React Query)** — Data fetching, caching, and server-state management.
- **Zustand** — Lightweight state management.
- **Font Awesome** — Icons for the user interface.
- **DummyJSON API** — Sample product data.

## Getting Started

Follow these steps to run VELORA locally.

### 1. Clone the repository

```bash
git clone https://github.com/taranom-y/nextjs-ecommerce.git
```

### 2. Navigate to the project directory

```bash
cd nextjs-ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

## Product Data

VELORA uses the [DummyJSON API](https://dummyjson.com/) to retrieve sample product data.

The application filters the available products to display clothing-related categories.

Because the project uses sample API data, the available products, brands, ratings, and reviews depend on the API response.

## Project Goals

This project is part of my journey in front-end development. Through VELORA, I am practicing:

- Building reusable React components.
- Developing responsive layouts with Tailwind CSS.
- Managing server state with TanStack Query.
- Managing application state with Zustand.
- Working with APIs and asynchronous JavaScript.
- Organizing a Next.js application using TypeScript.
- Using Git and GitHub for version control and feature-based development.

## Author

GitHub: [@taranom-y](https://github.com/taranom-y)
