import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { Router } from './Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./ThemeProvider"; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider> 
    <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover  
    />
      <RouterProvider router={Router} />
 </ThemeProvider>
  </StrictMode>,
)