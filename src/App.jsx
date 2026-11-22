import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/LayOut";
import HomePage from "./Components/HomePage";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./Components/NotFound";
import { ProductProvider } from "./Context/ProductContext";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/new" element={<AddProduct />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
