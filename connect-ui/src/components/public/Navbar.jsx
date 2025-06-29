import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography,
  IconButton,
  Tooltip,
} from '@/MUI/MuiComponents';

import { MenuIcon, LockOpenIcon, LockIcon } from '@/MUI/MuiIcons';
import StyledButton from '../common/StyledButton';

const navListBtn = [
  { path: '/login', text: 'Login', icon: <LockOpenIcon /> },
  { path: '/register', text: 'Unlock Access', icon: <LockIcon /> },
];

function Navbar() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" bgcolor='inherit' elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          py: 2,
          flexWrap: 'wrap',
          bgcolor: 'rgba(76, 40, 112, 0.09)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 4px rgba(71, 27, 100, 0.1)',
        }}
      >
        {/* Logo */}
        {/* <Box
          component="img"
          src="/logo.svg"
          alt="Website Logo"
          sx={{ maxWidth: 120 }}
        /> */}
        <Typography variant='h5' flexGrow={1}>
          LOGO
        </Typography>
        {/* Nav Links */}
        {isSm ? (
          <Tooltip title='Open Menu'>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {/* CTA Buttons */}
            {navListBtn.map((cta) => (
              <StyledButton text={cta.text} redirectUrl={cta.path} icon={cta.icon} />
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar >
  );
}

export default Navbar;
