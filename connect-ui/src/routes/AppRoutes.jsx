import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Features from '@/pages/public/Features';
import Contact from '@/pages/public/Contact';
import Login from '@/pages/public/Login';
import Register from '@/pages/public/Signup';
import { SidebarProvider } from '../context/SidebarContext';

// === Private Routes ===
import ChatUI from '../pages/private/chat/ChatUI';
import ChatSidebar from '../pages/private/chat/ChatSidebar';
import Settings from '../pages/private/settings/Settings';
import Profile from '../pages/private/Profile';
import SettingsLayout from '../pages/private/settings/SettingsLayout';

import AccountLayout from '../pages/private/settings/account/AccountLayout';
import Account from '../pages/private/settings/account/Account';
import SecurityNotifications from '../pages/private/settings/account/securityNotification/SecurityNotifications';
import RequestAccountInfo from '../pages/private/settings/account/reqAccountInfo/RequestAccountInfo';
import AccountDelete from '../pages/private/settings/account/accountDelete/AccountDelete';

import Chats from '../pages/private/settings/Chats';
import Privacy from '../pages/private/settings/Privacy';
import Notifications from '../pages/private/settings/Notifications';
import Help from '../pages/private/settings/Help';

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
      { path: 'register', element: <Register /> }
    ]
  },

  // === Protected routes Temp ===
  {
    path: '/connect',
    element: <ChatUI />,
    children: [
      { index: true, element: <ChatSidebar /> },
      { path: 'profile', element: <Profile /> },

      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <Settings /> },
          { path: 'profile', element: <Profile /> },

          { path: 'chats', element: <Chats /> },
          { path: 'privacy', element: <Privacy /> },
          { path: 'notifications', element: <Notifications /> },
          { path: 'help', element: <Help /> },

          {
            path: 'account',
            element: <AccountLayout />,
            children: [
              { index: true, element: <Account /> },
              { path: 'security', element: <SecurityNotifications /> },
              { path: 'info', element: <RequestAccountInfo /> },
              { path: 'delete', element: <AccountDelete /> },
            ]
          },
        ]
      },
    ]
  }

]);
