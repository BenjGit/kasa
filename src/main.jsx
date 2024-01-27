import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Logements from './pages/Logements'
import { Navigate } from 'react-router-dom'
import './globalStyle.css'


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/logements/:id',
        element: <Logements />,
      },
      {
        path: '/404',
        element: <Error />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

