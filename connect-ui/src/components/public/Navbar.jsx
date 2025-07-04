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
import {
  MenuIcon,
  LockOpenIcon,
  LockIcon,
  CheckCircleOutlineIcon,
  SwapHorizIcon,
} from '@/MUI/MuiIcons';
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

  const [videoChanged, setVideoChanged] = React.useState(false);

  const handleChangeVideo = () => {
    const next = !videoChanged;
    setVideoChanged(next);
    localStorage.setItem('currentVideo', next.toString());
    window.dispatchEvent(new Event('storage')); // force other components to re-read
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
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
          bgcolor: 'transparent',
          backdropFilter: 'blur(4px)',
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
            <Tooltip
              title={
                videoChanged ? 'Revert Background Video' : 'Change Background Video'
              }
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'transparent',
                    boxShadow: `inset 0 0 2px ${theme.palette.secondary.dark}`,
                    color: theme.palette.text.primary,
                    px: 1.5,
                    py: 0.8,
                    fontSize: '0.85rem',
                    backdropFilter: 'blur(4px)',
                  },
                },
                arrow: {
                  sx: {
                    color: theme.palette.secondary.main
                  }
                }
              }}
            >
              <IconButton onClick={handleChangeVideo}>
                {videoChanged ? (
                  <CheckCircleOutlineIcon sx={{ color: 'success.main' }} />
                ) : (
                  <SwapHorizIcon sx={{ color: 'text.primary' }} />
                )}
              </IconButton>
            </Tooltip>
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
