import React from 'react';
import {
  Box,
  Stack,
  Switch,
  FormControlLabel,
  Divider
} from '@/MUI/MuiComponents';
import {
  VisibilityIcon,
  TuneIcon,
  BlockIcon,
  ChatIcon,
  SettingsBackupRestoreIcon,
} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import SectionHeader from './SectionHeader';

function Privacy() {
  const [privacySettings, setPrivacySettings] = React.useState({
    showProfilePic: true,
    showLocation: true,
    matchVerifiedOnly: false,
    allowRechat: true,
    blockNSFW: true,
    autoDeleteChats: false,
    allowExportData: false,
  });

  const handleToggle = (key) => (event) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: event.target.checked,
    }));
  };

  const renderSwitch = (label, settingKey) => (
    <FormControlLabel
      control={
        <Switch
          checked={privacySettings[settingKey]}
          onChange={handleToggle(settingKey)}
          color="primary"
        />
      }
      label={label}
    />
  );

  return (
    <Box>
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/settings'} text={'Privacy'} />
      </Stack>

      <Box
        component="form"
        mt={5}
        display="flex"
        flexDirection="column"
        gap={5}
      >

        {/* Profile Visibility */}
        <Box>
          <SectionHeader
            icon={<VisibilityIcon />}
            title="Profile visibility"
            desciption={`
              Control whether your profile picture or location is visible during a chat.
              `}
          />

          <Stack gap={1} mt={1}>
            {renderSwitch('Show my profile picture', 'showProfilePic')}
            {renderSwitch('Show my location to others', 'showLocation')}
          </Stack>
        </Box>
        <Divider />

        {/* Matching Preferences */}
        <Box>
          <SectionHeader
            icon={<TuneIcon />}
            title="Matching preferences"
            desciption={`
              Decide who you get matched with, like verified users only.
              `}
          />
          <Stack gap={1} mt={1}>
            {renderSwitch('Match with verified users only', 'matchVerifiedOnly')}
          </Stack>
        </Box>
        <Divider />

        {/* Chat Interaction */}
        <Box>
          <SectionHeader
            icon={<ChatIcon />}
            title="Chat interaction"
            desciption={`
            Manage chat behavior, like allowing reconnects or auto-deleting sessions.
            `}
          />
          <Stack gap={1} mt={1}>
            {renderSwitch('Allow user to reconnect after chat', 'allowRechat')}
            {renderSwitch('Auto delete chats after session', 'autoDeleteChats')}
          </Stack>
        </Box>
        <Divider />

        {/* Safety & Blocking */}
        <Box>
          <SectionHeader
            icon={<BlockIcon />}
            title="Safety & blocking"
            desciption={`
            Improve safety by blocking NSFW (Not Safe For Work) content and filtering out inappropriate users. These options help you maintain a safe and respectful chat environment.
            `}
          />
          <Stack gap={1} mt={1}>
            {renderSwitch('Block NSFW matches', 'blockNSFW')}
          </Stack>
        </Box>
        <Divider />

        {/* Data Control */}
        <Box>
          <SectionHeader
            icon={<SettingsBackupRestoreIcon />}
            title="Data control"
            desciption={`
            Decide what happens to your chat data. Choose whether to allow exporting your chat logs or keep everything private with data export turned off.
            `}
          />
          <Stack gap={1} mt={1}>
            {renderSwitch('Allow export of my data', 'allowExportData')}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Privacy;
