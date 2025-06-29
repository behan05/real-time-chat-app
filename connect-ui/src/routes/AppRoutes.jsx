import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Features from '@/pages/public/Features';
import Contact from '@/pages/public/Contact';
import Login from '@/pages/public/Login';
import Register from '@/pages/public/Signup';
import { SidebarProvider } from '../context/SidebarContext';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <SidebarProvider>
        <PublicLayout />
      </SidebarProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'features', element: <Features /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ]
  }
]);
