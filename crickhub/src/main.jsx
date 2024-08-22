import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LiveMatches from './pages/AllMatches.jsx';
import LandingPage from './pages/LiveMatches.jsx';
import AllMatches from './pages/AllMatches.jsx';
import PointsTable from './pages/PointsTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "live-matches",
        element: <LandingPage />,
      },
      {
        path: "all-matches",
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
