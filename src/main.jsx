import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import BookDetails from './assets/Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('../public/Books.JSON')
      },
      {
        path:"/details/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/Books.JSON')
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
