import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Avatar,
  Divider,
  Tooltip,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme
} from '@/MUI/MuiComponents';
import {
  SearchIcon,
  LockIcon,
  KeyIcon,
  NotificationsIcon,
  SosIcon,
  ChatIcon,
  LogoutIcon
} from '@/MUI/MuiIcons';
import { Link, useNavigate } from 'react-router-dom';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import { logout } from '@/redux/slices/auth/authAction';
import { getProfile } from '@/redux/slices/profile/profileAction';
import { getSettingsPrivacy, getSettingsNotification } from '@/redux/slices/settings/settingsAction';
import { useDispatch, useSelector } from 'react-redux';

function Settings() {
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  // Fetch profile and settings data on component mount
  // This will ensure that the profile and settings data are available when the component renders
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getSettingsPrivacy());
    dispatch(getSettingsNotification());
  }, [dispatch]);

  const settingItems = [
    {
      path: 'account',
      icon: <KeyIcon sx={{ mr: 1.1, color: 'warning.main' }} />,
      title: 'Account',
      subTitle: 'Security notification, account info'
    },
    {
      path: 'privacy',
      icon: <LockIcon sx={{ mr: 1.1, color: 'info.main' }} />,
      title: 'Privacy',
      subTitle: 'Blocked contacts, controls'
    },
    {
      path: 'chats',
      icon: <ChatIcon sx={{ mr: 1.1, color: 'success.main' }} />,
      title: 'Chats',
      subTitle: 'Theme, wallpaper, chat settings'
    },
    {
      path: 'notifications',
      icon: <NotificationsIcon sx={{ mr: 1.1, color: 'primary.main' }} />,
      title: 'Notifications',
      subTitle: 'Message notifications'
    },
    {
      path: 'help',
      icon: <SosIcon sx={{ mr: 1.1, color: 'error.main' }} />,
      title: 'Help',
      subTitle: 'Help center, contact us, privacy policy'
    }
  ];

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <Box component={'section'} sx={{ minWidth: 300 }}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect'} text={'Settings'} />
      </Stack>
      {/* Search keywords */}
      <Box component={'section'} mt={1}>
        <TextField
          size="small"
          fullWidth
          placeholder={'Search settings...'}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />
          }}
        />
      </Box>

      {/* Profile avatar */}
      <Stack
        component={Link}
        to={'/connect/profile'}
        my={4}
        flexDirection={isSm ? 'column' : 'row'}
        gap={2}
      >
        <Tooltip title="Profile">
          <Avatar
            src=""
            alt="user profile image"
            aria-level="user profile image"
            sx={{
              width: 100,
              height: 100
            }}
          />
        </Tooltip>

        <Stack>
          <Typography variant="body1" letterSpacing={1} color={'text.primary'}>
            {profileData?.fullName || 'User Name'}
          </Typography>
          <Typography variant="body2" letterSpacing={1} color={'text.secondary'}>
            {profileData?.shortBio || 'Short Bio'}
          </Typography>
        </Stack>
      </Stack>
      <Divider />

      {/* Setting items */}

      <List>
        {settingItems.map((item, i) => (
          <ListItemButton
            key={i}
            aria-level={item.title}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Stack>
              <ListItemText primary={item.title} sx={{ m: 0 }} />
              <ListItemText secondary={item.subTitle} sx={{ m: 0 }} />
            </Stack>
          </ListItemButton>
        ))}
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 1,
            p: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)'
            }
          }}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ mr: 1.1, color: 'error.main' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'error.main' }} />
        </ListItemButton>
      </List>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Settings;
