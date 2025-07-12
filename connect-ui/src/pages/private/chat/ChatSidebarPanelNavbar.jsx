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
  TextField
} from '@/MUI/MuiComponents';
import {
  ShuffleIcon,
  ChatIcon,
  ArchiveIcon,
  PersonIcon,
  MoreVertIcon,
  LogoutIcon,
  HelpOutlineIcon,
  SettingsIcon,
  SearchIcon
} from '@/MUI/MuiIcons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import StyledText from '@/components/common/StyledText';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/auth/authAction';

// toast prompt
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatSidebarPanelNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState('');
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const navItems = [
    { path: '/random-chat', icon: <ShuffleIcon />, label: 'Random Chat' },
    // { path: '/chat', icon: <ChatIcon />, label: 'Chat' },
    { path: '/archive', icon: <ArchiveIcon />, label: 'Archived' }
  ];

  const currentSection =
    {
      '/connect': 'Connect',
      '/random-chat': 'Random Connect',
      '/archive': 'Archive'
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
        zIndex: 999
      }}
    >
      {/* ToastContainer */}
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
      <Box px={2}>
        {/* Top Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700}>
            <StyledText text={currentSection} />
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
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

        {/* Search */}
        <Box mt={1}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search chats..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />
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
              backgroundColor: 'background.paper',
              boxShadow: 3,
              minWidth: 180,
              px: 1,
              py: 0.5
            }
          }}
        >
          <MenuItem component={NavLink} to="profile" onClick={() => setMenuAnchorEl(null)}>
            <PersonIcon fontSize="small" sx={{ mr: 1 }} />
            Profile
          </MenuItem>
          <MenuItem component={NavLink} to="settings" onClick={() => setMenuAnchorEl(null)}>
            <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
            Settings
          </MenuItem>
          <MenuItem component={NavLink} to="support" onClick={() => setMenuAnchorEl(null)}>
            <HelpOutlineIcon fontSize="small" sx={{ mr: 1 }} />
            Help
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleLogout}>
            <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default ChatSidebarPanelNavbar;
