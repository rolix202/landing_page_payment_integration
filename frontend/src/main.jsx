import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import './index.css'
import RegularTicket from './pages/RegularTicket.jsx'
import Vip from './pages/Vip.jsx'
import Executive from './pages/Executive.jsx'
import VerifyPayment from './components/VerifyPayment.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/regular-ticket",
    element: <RegularTicket />
  },
  {
    path: "/vip-ticket",
    element: <Vip />
  },
  {
    path: "/executive-ticket",
    element: <Executive />
  },
  {
    path: "/verify-payment",
    element: <VerifyPayment />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
