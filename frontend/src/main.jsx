import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import RegularTicket from './pages/RegularTicket.jsx'
import Vip from './pages/Vip.jsx'
import Executive from './pages/Executive.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
