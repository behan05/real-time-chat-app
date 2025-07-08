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

// === Account Settings ===
import AccountLayout from '../pages/private/settings/account/AccountLayout';
import Account from '../pages/private/settings/account/Account';
import SecurityNotifications from '../pages/private/settings/account/securityNotification/SecurityNotifications';
import RequestAccountInfo from '../pages/private/settings/account/reqAccountInfo/RequestAccountInfo';
import AccountDelete from '../pages/private/settings/account/accountDelete/AccountDelete';

// === Privacy Settings === 
import PrivacyLayout from '../pages/private/settings/Privacy/PrivacyLayout';
import Privacy from '../pages/private/settings/privacy/Privacy';

// === Chats Settings === 
import ChatsLayout from '../pages/private/settings/chats/ChatsLayout';
import Chats from '../pages/private/settings/chats/Chats';

// === Notification Settings === 
import NotificationsLayout from '../pages/private/settings/notifications/NotificationsLayout';
import Notifications from '../pages/private/settings/notifications/Notifications';

// === Help Settings === 
import HelpLayout from '../pages/private/settings/help/HelpLayout';
import Help from '../pages/private/settings/help/Help';

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

          // Account Settings
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

          // Privacy Settings
          {
            path: 'privacy',
            element: <PrivacyLayout />,
            children: [
              { index: true, element: <Privacy /> }
            ]
          },

          // Chat Settings
          {
            path: 'chats',
            element: <ChatsLayout />,
            children: [
              { index: true, element: <Chats /> },
              {},
            ]
          },

          // Notification settings
          {
            path: 'notifications',
            element: <NotificationsLayout />,
            children: [
              { index: true, element: <Notifications /> },
              {},
            ]
          },

          // Help settings
          {
            path: 'help',
            element: <HelpLayout />,
            children: [
              { index: true, element: <Help /> },
              {},
            ]
          },

        ]
      },
    ]
  }

]);
