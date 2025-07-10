import React from 'react';
import {
  Box,
  Stack,
  Switch,
  Typography,
  Divider,
  FormControlLabel,
  useTheme
} from '@/MUI/MuiComponents';
import {
  VisibilityIcon,
  TuneIcon,
  BlockIcon,
  ChatIcon,
  SettingsBackupRestoreIcon,
} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import StyledText from '@/components/common/StyledText';

function Privacy() {
  const theme = useTheme();

  const [privacySettings, setPrivacySettings] = React.useState({
    showProfilePic: true,
    showLocation: true,
    matchVerifiedOnly: false,
    allowRechat: true,
    blockNSFW: true,
    autoDeleteChats: false,
    allowExportData: false,
  });

  const handleToggle = (key) => (e) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: e.target.checked,
    }));
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
      {/* Navigation Back */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo="/connect/settings" text="Privacy Settings" />
      </Stack>

      <Box
        mt={4}
        display="flex"
        flexDirection="column"
        gap={4}
        minWidth={300}
        maxWidth={800}
        mx="auto"
        px={2}
        py={3}
        borderRadius={1}
        sx={{
          backdropFilter: 'blur(14px)',
          backgroundColor: 'background.paper',
          boxShadow: `inset 1px 1px 0.2rem ${theme.palette.divider}`,
        }}
      >
        {/* === Sections === */}
        <Section
          icon={<VisibilityIcon fontSize="small" sx={{ color: 'info.main' }} />}
          title="Profile Visibility"
          description="Control whether your profile picture or location is visible during a chat."
        >
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.showProfilePic}
                onChange={handleToggle('showProfilePic')}
                color="primary"
              />
            }
            label="Show my profile picture"
          />
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.showLocation}
                onChange={handleToggle('showLocation')}
                color="primary"
              />
            }
            label="Show my location to others"
          />
        </Section>

        <Divider />

        <Section
          icon={<TuneIcon fontSize="small" sx={{ color: 'primary.main' }} />}
          title="Matching Preferences"
          description="Choose who you're matched with during random chats."
        >
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.matchVerifiedOnly}
                onChange={handleToggle('matchVerifiedOnly')}
                color="primary"
              />
            }
            label="Match with verified users only"
          />
        </Section>

        <Divider />

        <Section
          icon={<ChatIcon fontSize="small" sx={{ color: 'success.main' }} />}
          title="Chat Preferences"
          description="Decide how chats behave like rechat and auto-deletion."
        >
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.allowRechat}
                onChange={handleToggle('allowRechat')}
                color="primary"
              />
            }
            label="Allow user to reconnect after chat"
          />
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.autoDeleteChats}
                onChange={handleToggle('autoDeleteChats')}
                color="primary"
              />
            }
            label="Auto delete chats after session"
          />
        </Section>

        <Divider />

        <Section
          icon={<BlockIcon fontSize="small" sx={{ color: 'error.main' }} />}
          title="Safety & NSFW"
          description="Improve your safety by blocking inappropriate matches."
        >
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.blockNSFW}
                onChange={handleToggle('blockNSFW')}
                color="primary"
              />
            }
            label="Block NSFW matches"
          />
        </Section>

        <Divider />

        <Section
          icon={<SettingsBackupRestoreIcon fontSize="small" sx={{ color: 'warning.main' }} />}
          title="Data & Logs"
          description="Choose if your chat data can be exported or saved."
        >
          <FormControlLabel
            control={
              <Switch
                checked={privacySettings.allowExportData}
                onChange={handleToggle('allowExportData')}
                color="primary"
              />
            }
            label="Allow export of my data"
          />
        </Section>
      </Box>
    </Box>
  );
}

export default Privacy;
