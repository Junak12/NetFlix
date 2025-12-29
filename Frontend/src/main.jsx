import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Player from './pages/Player.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children: [
      {
        index: true,
        Component:Home,
      },
      {
        path:'/login',
        Component:Login,
      },
      {
        path:'movie/:id',
        Component:Player,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
