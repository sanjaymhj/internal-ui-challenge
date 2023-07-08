import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { WeekOne } from './week-1';
import { WeekTwo } from './week-2';
import { WeekThree } from './week-3';
import { WeekFive } from './week-5';

import './reset.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WeekOne />,
  },
  {
    path: '/week-1',
    element: <WeekOne />,
  },
  {
    path: '/week-2',
    element: <WeekTwo />,
  },
  {
    path: '/week-3',
    element: <WeekThree />,
  },
  {
    path: '/week-5',
    element: <WeekFive />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
