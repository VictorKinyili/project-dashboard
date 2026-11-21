 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import AddProductPage from "./pages/AddProductPage";

 function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<h1>ADMIN DASHBOARD</h1>} />
         <Route path="/products/new" element={<AddProductPage />} />
       </Routes>
     </BrowserRouter>
   );
 }

 export default App;