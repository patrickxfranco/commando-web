import { createBrowserRouter, type DataRouter } from 'react-router';

import { AppLayout } from '@/layouts/AppLayout';
import { Home } from '@/pages/Home';
import { NewContent } from '@/pages/NewContent';

export const router: DataRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'add',
        element: <NewContent />,
      },
    ],
  },
]);
