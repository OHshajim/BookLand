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
import Listed from './assets/Components/ListedBooks/Listed';
import ReadChart from './assets/Components/PageToRead/ReadChart';
import KidsZone from './assets/Components/Kids/KidsZone';
import Kidspage from './assets/Components/KidsPage/Kidspage';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../Books.JSON')
      },
      {
        path: "/listedBook",
        element: <Listed></Listed>,
        loader: () => fetch('../Books.JSON'),
      },
      {
        path: "/readChart",
        element: <ReadChart></ReadChart>,
        loader: () => fetch('../Books.JSON')
      },
      {
        path: "/kidsZone",
        element: <KidsZone></KidsZone>,
        loader: () => fetch('../KidsBook.JSON')
      },
      {
        path: "/kidspage",
        element: <Kidspage></Kidspage>,
        loader: () => fetch('../KidsBook.JSON')
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.JSON')
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
