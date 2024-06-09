import { Outlet, createBrowserRouter } from "react-router-dom";  
import { BrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

// import pages 
import RootLayout from "../Layouts/Layout";
import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="ContactPage" element={<ContactPage />} />
    </Route>
    
  )


);

function App() {  
  return (
    <RouterProvider router={router}>
      <BrowserRouter>
        <Outlet />
      </BrowserRouter>
    </RouterProvider>
  );
}

export default App;




/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello world!!! </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
