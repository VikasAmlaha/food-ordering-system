import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppLayout from './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/ContactUs';
import RestaurantsPage from './components/RestaurantsPage'
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from "react-router";
import reportWebVitals from './reportWebVitals';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
