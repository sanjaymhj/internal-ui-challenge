import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { WeekOne } from './week-one';
import { WeekTwo } from './week-two';

import './reset.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WeekOne />,
  },
  {
    path: '/week-one',
    element: <WeekOne />,
  },
  {
    path: '/week-two',
    element: <WeekTwo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
