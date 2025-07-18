import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import Home from '@/pages/public/Home';
import About from '@/pages/public/About';
import Features from '@/pages/public/Features';
import Contact from '@/pages/public/Contact';
import Login from '@/pages/public/Login';
import Register from '@/pages/public/Signup';
import FAQs from '@/pages/public/FAQs';
import { SidebarProvider } from '@/context/SidebarContext';
import PrivacyPolicyPage from '@/components/common/PrivacyPolicyPage';
import TermsOfUsePage from '@/components/common/TermsOfUsePage';

// === Common Use components ===
import PageNotFound from '@/components/common/PageNotFound';

// === Private Routes ===
import PrivateRoute from '@/middleware/PrivateRoute';
import ChatUI from '@/pages/private/chat/ChatUI';
import ChatSidebar from '@/pages/private/chat/ChatSidebar';
import Settings from '@/pages/private/settings/Settings';
import SettingsLayout from '@/pages/private/settings/SettingsLayout';

// === Account Settings ===
import AccountLayout from '@/pages/private/settings/account/AccountLayout';
import Account from '@/pages/private/settings/account/Account';
import RequestAccountInfo from '@/pages/private/settings/account/reqAccountInfo/RequestAccountInfo';
import AccountDelete from '@/pages/private/settings/account/accountDelete/AccountDelete';
import ChangeCredentials from '../pages/private/settings/account/changeCredentials/ChangeCredentials';

// === Privacy Settings ===
import PrivacyLayout from '@/pages/private/settings/privacy/PrivacyLayout';
import Privacy from '@/pages/private/settings/privacy/Privacy';

// === Chats Settings ===
import ChatsLayout from '@/pages/private/settings/chats/ChatsLayout';
import Chats from '@/pages/private/settings/chats/Chats';

// === Notification Settings ===
import NotificationsLayout from '@/pages/private/settings/notifications/NotificationsLayout';
import Notifications from '@/pages/private/settings/notifications/Notifications';

// === Help Settings ===
import HelpLayout from '@/pages/private/settings/help/HelpLayout';
import Help from '@/pages/private/settings/help/Help';
import HelpFAQs from '@/pages/private/settings/help/HelpFAQs';
import HelpContact from '@/pages/private/settings/help/HelpContact';
import HelpPrivacyPolicy from '@/pages/private/settings/help/HelpPrivacyPolicy';
import HelpReport from '@/pages/private/settings/help/HelpReport';
import ReportBug from '@/components/common/ReportBug';

// === Profile ===
import ProfileLayout from '@/pages/private/profile/ProfileLayout';
import Profile from '@/pages/private/profile/Profile';
import CompletionAndActivity from '@/pages/private/profile/CompletionAndActivity';
import GeneralInfo from '@/pages/private/profile/GeneralInfo';
import MatchingPreferences from '@/pages/private/profile/MatchingPreferences';
import TagsAndInterests from '@/pages/private/profile/TagsAndInterests';


export const routes = createBrowserRouter([
  // === Public routes ===
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
      { path: 'faq', element: <FAQs /> },
      { path: 'report', element: <ReportBug /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-of-use', element: <TermsOfUsePage /> },
      { path: '*', element: <PageNotFound redirectTo={'/'} /> }
    ]
  },

  // === Protected routes ===
  {
    path: '/connect',
    element: <PrivateRoute />,
    children: [
      {
        // index: true,
        element: <ChatUI />,
        children: [
          { index: true, element: <ChatSidebar /> },


          //  Settings
          {
            path: 'settings',
            element: <SettingsLayout />,
            children: [
              { index: true, element: <Settings /> },
              { path: 'profile', element: <Profile /> },

              // account
              {
                path: 'account',
                element: <AccountLayout />,
                children: [
                  { index: true, element: <Account /> },
                  { path: 'change-credentials', element: <ChangeCredentials /> },
                  { path: 'request-info', element: <RequestAccountInfo /> },
                  { path: 'delete-account', element: <AccountDelete /> }
                ]
              },

              // privacy
              {
                path: 'privacy',
                element: <PrivacyLayout />,
                children: [{ index: true, element: <Privacy /> }]
              },

              // chats
              {
                path: 'chats',
                element: <ChatsLayout />,
                children: [{ index: true, element: <Chats /> }]
              },

              // notifications
              {
                path: 'notifications',
                element: <NotificationsLayout />,
                children: [{ index: true, element: <Notifications /> }]
              },

              // help
              {
                path: 'help',
                element: <HelpLayout />,
                children: [
                  { index: true, element: <Help /> },
                  { path: 'faqs-help', element: <HelpFAQs /> },
                  { path: 'contact-help', element: <HelpContact /> },
                  { path: 'privacy-policy', element: <HelpPrivacyPolicy /> },
                  { path: 'report-problem', element: <HelpReport /> }
                ]
              }
            ]
          },

          // Profile
          {
            path: 'profile',
            element: <ProfileLayout />,
            children: [
              { index: true, element: <Profile /> },
              { path: 'activity', element: <CompletionAndActivity /> },
              { path: 'general-info', element: <GeneralInfo /> },
              { path: 'matching-preferences', element: <MatchingPreferences /> },
              { path: 'interests', element: <TagsAndInterests /> },
            ]
          }
        ]
      }
    ]
  }
]);
