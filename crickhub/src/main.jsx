import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LiveMatches from './pages/AllMatches.jsx';
import AllMatches from './pages/LiveMatches.jsx';
import PointsTable from './pages/PointsTable.jsx';

const router = createBrowserRouter([
  {
    path: "/matches",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <LiveMatches />,
      // },
      {
        path: "live",
        element: <LiveMatches />,
      },
      {
        path: "all",
        element: <AllMatches />,
      },
      {
        path: "points-table",
        element: <PointsTable />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
