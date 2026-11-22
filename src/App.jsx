 import React from "react";
 import {BrowserRouter ,Routes,Route} from "react-router"
 import HomePage from "./component/HomePage";
 import Layout from "./component/LayOut";
 import NotFound from "./component/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

 function App(){
return(
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<div>Products Page (Coming Soon)</div>} />
          <Route path="products/new" element={<div>Add Product Page (Coming Soon)</div>} />
          <Route path="products/:id" element={<div>Product Detail Page (Coming Soon)</div>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />

     </Route>
    </Routes>
   </BrowserRouter>
  </>
)
 }
 export default App
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ProductsPage from "./pages/ProductsPage";
// import ProductDetailPage from "./pages/ProductDetailPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/products" replace />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/:id" element={<ProductDetailPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// } 
 
 
