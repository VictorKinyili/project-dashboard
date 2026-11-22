# K-TECH Admin Console — E-Commerce Product Showcase App

A Single Page Application (SPA) built with React for managing the **K-TECH** e-commerce product catalogue. This project simulates joining a frontend engineering team partway through a sprint to deliver an interactive administrator portal backed by a simulated REST API (`json-server`).

---

## Features

- **Dashboard Overview (`/`):** Displays key store metrics (total products, low stock items, categories), company overview (*About Us*, *Our Vision*), and team roles.
- **Product Catalogue & Debounced Search (`/products`):** Lists all products with real-time, debounced search filtering (`useDebounce`) by product name.
- **Add New Products (`/products/new`):** Form page allowing administrators to add new products to the catalogue (`POST /products`) with accessible form controls (`useId`).
- **Inline Edit & Delete:** Update product details such as price (`PATCH /products/:id`) or remove items (`DELETE /products/:id`) directly from product cards.
- **Global State & Theme Management:** Uses React Context + `useReducer` (`ProductContext`) for product data, loading, and error states, alongside a Dark/Light mode toggle.
- **Responsive Layout & 404 Handling:** Mobile-friendly sidebar navigation and a custom `404 Not Found` route for invalid URLs.

---

## Tech Stack

- **Frontend:** React, React Router (`react-router-dom`), Tailwind CSS
- **State & Hooks:** `useState`, `useEffect`, `useContext`, `useReducer`, `useId`, `useRef`, and custom hooks (`useDebounce`)
- **Simulated Backend:** `json-server` (`db.json`)
- **Testing:** Vitest & React Testing Library

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies
```bash
npm ci
```
This installs the development dependencies too, including `json-server` and `concurrently`. Run it from the project root after cloning or pulling changes.

### 3. Start the app and simulated backend
Run both the React development server and JSON Server together:
```bash
npm run dev
```
The API is available at `http://localhost:3001/products`. Open the local app URL shown in your terminal (typically `http://localhost:5173`). If the command reports that `json-server` is not found, run `npm ci` first; don't install it globally.

---

## Running Tests

Tests are optional and currently no test files are included. When tests are added, run them with:
```bash
npm test
```

---

## Project Structure

```text
src/
├── components/       # Reusable UI components (Layout, Sidebar, ProductCard, ProductForm)
├── context/          # React Context & useReducer stores (ProductContext, ThemeContext)
├── hooks/            # Custom hooks (useDebounce)
├── pages/            # Route-level views (Dashboard, Products, AddProduct, NotFound)
├── tests/            # Vitest & React Testing Library test files
├── App.jsx           # Client-side routing configuration
└── main.jsx          # Application entry point
db.json               # Simulated database for json-server
```

---

## Known Limitations & Future Improvements

- **Simulated Persistence:** Data changes (`POST`, `PATCH`, `DELETE`) persist locally to `db.json` via `json-server` during development and require the mock server to be running.
- **Authentication:** Admin authentication and role-based access control are not included in this sprint scope.
- **Image Uploads:** Product cards currently use placeholder containers; cloud image upload support is planned for a future sprint.

---

## Team & Git Workflow

- `main`: Stable, submission-ready production branch.
- `dev`: Active integration branch where all `feat/*` and `fix/*` pull requests are merged and tested before release.
