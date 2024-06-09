import { Outlet, createBrowserRouter } from "react-router-dom";  
import { Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import React from "react";


// import pages 
import RootLayout from "../Layouts/Layout";
import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import ProductPage from "../../Pages/ProductPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="ProductPage" element={<ProductPage />} />


      
    </Route>
  )
);

function App() {  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
