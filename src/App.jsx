 import React from "react";
 import {BrowserRouter ,Routes,Route} from "react-router"
 import HomePage from "./component/HomePage";
 import Layout from "./component/LayOut";
 import NotFound from "./component/NotFound";
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
          <Route path="*" element={<NotFound />} />

     </Route>
    </Routes>
   </BrowserRouter>
  </>
)
 }
 export default App