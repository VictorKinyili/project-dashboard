 import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";

 function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<h1>ADMIN DASHBOARD</h1>} />
         <Route path="/products/new" element={<AddProduct/>} />
       </Routes>
     </BrowserRouter>
   );
 }

 export default App;