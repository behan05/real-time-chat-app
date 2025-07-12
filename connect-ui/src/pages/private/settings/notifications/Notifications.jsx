import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Divider,
  FormControlLabel,
  Switch,
  useTheme
} from '@/MUI/MuiComponents';

import {
  NotificationsActiveIcon,
  MessageIcon,
  ReportIcon,
  PersonAddIcon,
  BlockIcon
} from '@/MUI/MuiIcons';

import NavigateWithArrow from '@/components/private/NavigateWithArrow';

function Notifications() {
  const theme = useTheme();

  const [notifSettings, setNotifSettings] = React.useState({
    newMatch: true,
    newMessage: true,
    warningAlerts: true,
    friendRequest: false,
    blockNotification: false
  });

  const Section = ({ icon, title, description, children }) => (
    <Box>
      <Stack direction="row" alignItems="center" gap={1} mb={1}>
        {icon}
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {description}
      </Typography>
      <Stack spacing={1}>{children}</Stack>
    </Box>
  );

  return (
    <Box>
      {/* Back Navigation */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo="/connect/settings" text="Notifications" />
      </Stack>

      <Box
        mt={4}
        display="flex"
        flexDirection="column"
        gap={4}
        maxWidth={800}
        minWidth={300}
        mx="auto"
        px={2}
        py={3}
        borderRadius={1}
        sx={{
          backdropFilter: 'blur(14px)',
          backgroundColor: 'background.paper',
          boxShadow: `inset 1px 1px 0.2rem ${theme.palette.divider}`
        }}
      >
        {/* New Match Notification */}

        {/* Message Notification */}

        <Divider />

        {/* Warning Alerts */}

        <Divider />

        {/* Friend Request / Invite */}

        <Divider />

        {/* Block / Safety Related */}
      </Box>
    </Box>
  );
}

export default Notifications;
