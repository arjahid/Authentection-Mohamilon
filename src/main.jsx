import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home'
import Login from './Login'
import Register from './Register'
import AuthProvider from './providers/AuthProvider'
import Order from './components/Order'
import PrivateRoute from './Routes/PrivateRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)