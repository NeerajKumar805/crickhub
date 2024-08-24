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
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes LandingPage the default component for the base path
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <LandingPage />,
      },
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
