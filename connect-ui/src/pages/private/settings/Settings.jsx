import React from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
  Avatar,
  Divider,
  Tooltip,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from "../../../MUI/MuiComponents";
import {
  SearchIcon,
  LockIcon,
  KeyIcon,
  NotificationsIcon,
  SosIcon,
  ChatIcon,
  LogoutIcon,
  ArrowBackIcon,
} from "../../../MUI/MuiIcons";
import StyledText from '../../../components/common/StyledText';
import { Link } from 'react-router-dom';
import NavigateWithArrow from '../../../components/private/NavigateWithArrow';

function Settings() {
  const theme = useTheme();
  const ismd = useMediaQuery(theme.breakpoints.down('md'));
  const [searchValue, setSearchValue] = React.useState('');

  const settingItems = [
    {
      path: 'account',
      icon: <KeyIcon sx={{ mr: 1.1, color: 'text.secondary' }} />,
      title: 'Account',
      subTitle: 'Security notification, account info',
    },
    {
      path: 'privacy',
      icon: <LockIcon sx={{ mr: 1.1, color: 'text.secondary' }} />,
      title: 'Privacy',
      subTitle: 'Blocked contacts',
    },
    {
      path: 'chats',
      icon: <ChatIcon sx={{ mr: 1.1, color: 'text.secondary' }} />,
      title: 'Chats',
      subTitle: 'Theme, wallpaper, chat settings',
    },
    {
      path: 'notifications',
      icon: <NotificationsIcon sx={{ mr: 1.1, color: 'text.secondary' }} />,
      title: 'Notifications',
      subTitle: 'message notifications',
    },
    {
      path: 'help',
      icon: <SosIcon sx={{ mr: 1.1, color: 'text.secondary' }} />,
      title: 'Help',
      subTitle: 'Help center, contact us, privacy policy',
    },

  ];

  return (
    <Box component={'dev'} sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.paper',
      borderRight: '1px solid rgba(112, 106, 106, 0.3)',
      minHeight: '100vh',
      maxHeight: '100vh'
    }}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect'} text={'Settings'} />
      </Stack>
      {/* Search keywords */}
      <Box component={'sections'} mt={1}>
        <TextField
          size="small"
          fullWidth
          placeholder={'Search settings...'}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />,
          }}
        />
      </Box>

      {/* Profile avatar */}
      <Stack
        component={Link}
        to={'profile'}
        my={4}
        flexDirection={'row'}
        gap={2}
      >
        <Tooltip title="Profile">
          <Avatar
            src=''
            alt='user profile image'
            aria-level='user profile image'
            sx={{
              width: 60,
              height: 60,
            }}
          />
        </Tooltip>

        <Stack>
          <Typography
            variant='body1'
            letterSpacing={1}
            color={'text.primary'}
          >
            User name
          </Typography>
          <Typography
            variant='body2'
            letterSpacing={1}
            color={'text.secondary'}
          >
            About user
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
              borderRadius: 1
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Stack>
              <ListItemText primary={item.title} sx={{ m: 0 }} />
              <ListItemText secondary={item.subTitle} sx={{ m: 0 }} />
            </Stack>
          </ListItemButton>
        ))}
      </List>

      <List>
        <ListItemButton component={Link} to={'/logout'} sx={{
          borderRadius: 1
        }}>
          <ListItemIcon>{<LogoutIcon sx={{ mr: 1.1, color: 'error.main' }} />}</ListItemIcon>
          <ListItemText primary='Logout' sx={{ color: 'error.main' }} />
        </ListItemButton>
      </List>

      <Divider sx={{ mt: 4 }} />
    </Box>
  )
}

export default Settings;