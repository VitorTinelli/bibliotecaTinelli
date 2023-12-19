import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Livro from './Livro';
import AdmLogin from './admLogin';
import AdminControl from './adminControl';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/livro',
        element: <Livro />,
      },
      {
        path: 'admLogin',
        element: <AdmLogin />,
      },
      {
        path: 'adminControl',
        element: <AdminControl />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)