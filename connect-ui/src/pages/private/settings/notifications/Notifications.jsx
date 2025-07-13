import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Divider,
  FormControlLabel,
  Switch,
  useTheme,
} from '@/MUI/MuiComponents';

import {
  NotificationsActiveIcon,
  MessageIcon,
  ReportIcon,
  PersonAddIcon,
  BlockIcon,
} from '@/MUI/MuiIcons';

import NavigateWithArrow from '@/components/private/NavigateWithArrow';

function Notifications() {
  const theme = useTheme();

  const [notifSettings, setNotifSettings] = React.useState({
    newMatch: true,
    newMessage: true,
    warningAlerts: true,
    friendRequest: false,
    blockNotification: false,
  });

  const handleToggle = (key) => {
    setNotifSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
        borderRadius={2}
        sx={{
          backdropFilter: 'blur(14px)',
          backgroundColor: 'background.paper',
          boxShadow: `inset 1px 1px 0.2rem ${theme.palette.divider}`
        }}
      >
        {/* New Match Notification */}
        <Section
          icon={<NotificationsActiveIcon sx={{ color: theme.palette.success.main }} />}
          title="New Match"
          description="Get notified when you get a new random match."
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifSettings.newMatch}
                onChange={() => handleToggle('newMatch')}
              />
            }
            label="Enable match notifications"
          />
        </Section>

        <Divider />

        {/* Message Notification */}
        <Section
          icon={<MessageIcon sx={{ color: theme.palette.info.main }} />}
          title="New Message"
          description="Receive alerts when someone sends you a message."
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifSettings.newMessage}
                onChange={() => handleToggle('newMessage')}
              />
            }
            label="Enable message notifications"
          />
        </Section>

        <Divider />

        {/* Warning Alerts */}
        <Section
          icon={<ReportIcon sx={{ color: theme.palette.warning.main }} />}
          title="Warning & Alerts"
          description="Get notified of suspicious activity or policy warnings."
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifSettings.warningAlerts}
                onChange={() => handleToggle('warningAlerts')}
              />
            }
            label="Enable safety alerts"
          />
        </Section>

        <Divider />

        {/* Friend Request */}
        <Section
          icon={<PersonAddIcon sx={{ color: theme.palette.primary.main }} />}
          title="Friend Requests"
          description="Receive notifications when someone sends you a friend request."
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifSettings.friendRequest}
                onChange={() => handleToggle('friendRequest')}
              />
            }
            label="Enable friend request notifications"
          />
        </Section>

        <Divider />

        {/* Block Notifications */}
        <Section
          icon={<BlockIcon sx={{ color: theme.palette.error.main }} />}
          title="Block Activity"
          description="Receive alerts when a blocked user interacts or appears again."
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifSettings.blockNotification}
                onChange={() => handleToggle('blockNotification')}
              />
            }
            label="Enable block notifications"
          />
        </Section>
      </Box>
    </Box>
  );
}

export default Notifications;
