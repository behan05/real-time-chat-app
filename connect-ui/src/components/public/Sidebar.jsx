import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@/MUI/MuiComponents';
import {
  HomeOutlinedIcon,
  BuildCircleOutlinedIcon,
  InfoOutlinedIcon,
  ContactMailOutlinedIcon,
  LockOpenIcon,
  LockIcon,
} from '@/MUI/MuiIcons';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';

const drawerWidth = 80;

const sidebarList = [
  { path: '/', text: 'Home', icon: <HomeOutlinedIcon /> },
  { path: '/features', text: 'Features', icon: <BuildCircleOutlinedIcon /> },
  { path: '/about', text: 'About', icon: <InfoOutlinedIcon /> },
  { path: '/contact', text: 'Contact', icon: <ContactMailOutlinedIcon /> },
  { path: '/login', text: 'Login', icon: <LockOpenIcon /> },
  { path: '/register', text: 'Unlock Access', icon: <LockIcon /> },
];

const Sidebar = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          bgcolor: 'transparent',
          boxShadow: 'none',
          p: 2,

          position: 'fixed',
          top: '50%',
          transform: 'translateY(-50%)',
          height: 'fit-content',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            width: '3px',
            height: '100%',
            background: `linear-gradient(to bottom, transparent 50%, ${theme.palette.warning.main} 10%, transparent 100%)`,
            backgroundSize: '100% 200%',
            animation: 'glowFlow 4s ease-in-out infinite',
          }
        },
      }}
    >
      <List>
        {sidebarList.map((item, i) => {
          // Hide login/register on large screens
          if (!isSm && ['Login', 'Unlock Access'].includes(item.text)) return null;

          return (
            <ListItem key={i} disablePadding onClick={toggleSidebar}>
              <Tooltip title={item.text} placement="right">
                <NavLink
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {({ isActive }) => (
                    <IconButton
                      sx={{
                        color: theme.palette.text.primary,
                        width: '100%',
                        justifyContent: 'center',
                        my: 1,
                        bgcolor: isActive ? 'rgba(177, 175, 179, 0.09)' : 'none',
                        backdropFilter: isActive ? 'blur(14px)' : 'none',
                        boxShadow: isActive ? '0 0 2px rgba(199, 195, 202, 0.6)' : 'none',
                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  )}
                </NavLink>

              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
