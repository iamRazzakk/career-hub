import React from 'react'
import ReactDOM from 'react-dom';
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Route from './components/Route/Route';
import Home from './components/Home/Home';
import ApplyedJobs from './components/ApplyedJobs/ApplyedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <ApplyedJobs></ApplyedJobs>
      },
      {

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
