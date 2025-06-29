import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  Stack,
  IconButton,
  Tooltip,
} from '@/MUI/MuiComponents';
import { MenuIcon, LockOpenIcon, LockIcon } from '@/MUI/MuiIcons';
import StyledButton from '../common/StyledButton';
import { useSidebar } from '@/context/SidebarContext';
import { Link } from 'react-router-dom';

const navListBtn = [
  { path: '/login', text: 'Login', icon: <LockOpenIcon /> },
  { path: '/register', text: 'Unlock Access', icon: <LockIcon /> },
];

function Navbar() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleSidebar } = useSidebar();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        boxShadow: '0 0 4px rgba(135, 90, 165, 0.1)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          py: 1,
          flexWrap: 'wrap',
          bgcolor: 'rgba(255, 255, 255, 0.09)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 4px rgba(222, 185, 247, 0.1)',
        }}
      >
        <Stack component={Link} to={'/'}>
          <Stack
            component={'img'}
            src={'/logo.png'}
            alt='connect logo'
            aria-label="Connect logo"
            maxWidth={isSm ? 79 : 80}
            boxShadow={3}
          />
        </Stack>

        {isSm ? (
          <Tooltip title="Open Menu">
            <IconButton onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navListBtn.map((cta, i) => (
              <StyledButton
                key={i}
                text={cta.text}
                redirectUrl={cta.path}
                icon={cta.icon}
              />
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
