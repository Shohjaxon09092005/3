import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Careers from './pages/Careers';
import Location from './pages/Location';


const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter([{
  element: <App />,
  path:"/",
  errorElement:<ErrorPage/>,
  children:[
    {
    path:"/",
    element:<HomePage/>
  },
    {
    path:"/about",
    element:<About/>
  },
    {
    path:"/careers",
    element:<Careers/>
  },
    {
    path:"/location",
    element:<Location/>
  },
]

}])
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

