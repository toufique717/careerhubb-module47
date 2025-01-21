import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componant/Root/Root.jsx';
import Home from './componant/Home/Home.jsx';
import Statistics from './componant/Statistics/Statistics.jsx';
 
import Blog from './componant/Blog/Blog.jsx';
import Appliedjob from './componant/AppliedJob/Appliedjob.jsx';
import Errorpage from './componant/Errorpage/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,

    children: [
      {
        path: "/",
        element:<Home></Home>,
      },

      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },

      {
        path: "/applied",
        element:<Appliedjob></Appliedjob>,
      },

      {
        path: "/bloog",
        element:<Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
