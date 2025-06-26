import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout'; // assuming this is your layout
import Home from '@/pages/public/Home'; // your actual homepage

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />, // this will contain <Outlet />
    children: [
      { index: true, element: <Home /> }
      // Add other routes here
    ]
  }
]);
