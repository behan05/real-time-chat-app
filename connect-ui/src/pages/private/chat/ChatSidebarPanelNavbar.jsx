import React from 'react';
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Divider,
  TextField,
  useTheme,
} from '@/MUI/MuiComponents';
import {
  ShuffleIcon,
  FavoriteBorderIcon,
  PersonIcon,
  MoreVertIcon,
  LogoutIcon,
  HelpOutlineIcon,
  SettingsIcon,
  SearchIcon,
  BlockIcon,
} from '@/MUI/MuiIcons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import StyledText from '@/components/common/StyledText';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/auth/authAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatSidebarPanelNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [searchValue, setSearchValue] = React.useState('');
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const navItems = [
    {
      path: '/random-chat',
      icon: <ShuffleIcon sx={{ color: theme.palette.success.main }} />,
      label: 'Random Chat',
    },
    {
      path: '/favorites',
      icon: <FavoriteBorderIcon sx={{ color: theme.palette.warning.main }} />,
      label: 'Favorites',
    },
    {
      path: '/blocked',
      icon: <BlockIcon sx={{ color: theme.palette.error.main }} />,
      label: 'Blocked Users',
    },
  ];

  const currentSection =
    {
      '/connect': 'Connect',
      '/random-chat': 'Random Connect',
      '/archive': 'Archive',
    }[location.pathname] || 'Connect';

  const handleLogout = async () => {
    dispatch(logout());
    toast.success('You have been logged out 😔');
    setTimeout(() => navigate('/login', { replace: true }), 1000);
  };

  return (
    <Box
      py={1}
      bgcolor="background.paper"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />

      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={700}>
          <StyledText text={currentSection} />
        </Typography>

        {/* Action Icons */}
        <Stack direction="row" alignItems="center" gap={0.5}>
          {navItems.map(({ path, icon, label }) => (
            <Tooltip key={label} title={label} arrow>
              <IconButton component={NavLink} to={path}>
                {icon}
              </IconButton>
            </Tooltip>
          ))}
          <Tooltip title="Menu" arrow>
            <IconButton onClick={(e) => setMenuAnchorEl(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Search Bar */}
      <Box mt={1}>
        <TextField
          size="small"
          fullWidth
          placeholder="Search chats..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />,
          }}
        />
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={() => setMenuAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[6],
            borderRight: `1px dotted ${theme.palette.success.main}`,
            borderLeft: `1px dotted ${theme.palette.success.main}`,
            borderRadius: 1,
            minWidth: 200,
            px: 1,
            py: 0.75,
            overflow: 'hidden',
          },
        }}
      >
        {/* Menu Items */}
        {[
          {
            label: 'Profile',
            to: 'profile',
            icon: <PersonIcon fontSize="small" sx={{ mr: 1, color: theme.palette.info.main }} />,
          },
          {
            label: 'Settings',
            to: 'settings',
            icon: <SettingsIcon fontSize="small" sx={{ mr: 1, color: theme.palette.primary.main }} />,
          },
          {
            label: 'Help',
            to: 'settings/help',
            icon: <HelpOutlineIcon fontSize="small" sx={{ mr: 1, color: theme.palette.warning.main }} />,
          },
        ].map(({ label, to, icon }) => (
          <MenuItem
            key={label}
            component={NavLink}
            to={to}
            onClick={() => setMenuAnchorEl(null)}
            sx={{
              borderRadius: 1,
              px: 1.5,
              py: 1,
              mb: 0.5,
              transition: 'all 0.2s',
              '&:hover': {
                transform: `translateY(-5px)`,
                borderBottom: `1px dotted ${theme.palette.success.main}`
              },
            }}
          >
            {icon}
            {label}
          </MenuItem>
        ))}

        <Divider sx={{ my: 0.5 }} />

        {/* Logout Item */}
        <MenuItem
          onClick={handleLogout}
          sx={{
            borderRadius: 1,
            px: 1.5,
            py: 1,
            transition: 'all 0.2s',
            '&:hover': {
              transform: `translateY(-5px)`,
              borderBottom: `1px dotted ${theme.palette.success.main}`
            },
          }}
        >
          <LogoutIcon fontSize="small" sx={{ mr: 1, color: theme.palette.error.main }} />
          Logout
        </MenuItem>
      </Menu>

      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default ChatSidebarPanelNavbar;
