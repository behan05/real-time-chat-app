import { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Switch,
  Typography,
  Divider,
  FormControlLabel,
} from '@/MUI/MuiComponents';
import {
  VisibilityIcon,
  TuneIcon,
  BlockIcon,
  ChatIcon,
  SettingsBackupRestoreIcon
} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import BlurWrapper from '@/components/common/BlurWrapper';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateSettingsPrivacy, getSettingsPrivacy } from '@/redux/slices/settings/settingsAction';
import { useSelector, useDispatch } from 'react-redux';

function Privacy() {
  const dispatch = useDispatch();
  const { settingsData } = useSelector((state) => state.settings);

  const defaultSettings = {
    showProfilePic: true,
    showLocation: true,
    matchVerifiedOnly: false,
    allowRechat: true,
    blockNSFW: true,
    autoDeleteChats: false,
    allowExportData: false
  };

  const [formData, setFormData] = useState(defaultSettings);

  // Fetch initial settings data
  useEffect(() => {
    dispatch(getSettingsPrivacy());
  }, []);

  // Sync Redux state -> Local form state
  useEffect(() => {
    if (settingsData?.privacySettings) {
      setFormData(prev => ({
        ...prev,
        ...settingsData.privacySettings
      }));
    }
  }, [settingsData]);

  const handleToggle = (key) => async (e) => {
    const updatedValue = e.target.checked;
    const updatedFormData = {
      ...formData,
      [key]: updatedValue
    };

    setFormData(updatedFormData);

    try {
      const response = await dispatch(updateSettingsPrivacy(updatedFormData));

      if (response?.success) {
        toast.success(response.message || 'Privacy settings updated');
      } else {
        toast.error(response?.error || response?.message || 'Failed to update settings');
      }
    } catch (error) {
      toast.error(error?.message || 'Something went wrong');
    }

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
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />

      {/* Navigation Back */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo="/connect/settings" text="Privacy Settings" />
      </Stack>

      <BlurWrapper>
        {/* === Sections === */}
        <Section
          icon={<VisibilityIcon fontSize="small" sx={{ color: 'info.main' }} />}
          title="Profile Visibility"
          description="Control whether your profile picture or location is visible during a chat."
        >
          <FormControlLabel
            control={
              <Switch
                checked={formData.showProfilePic}
                onChange={handleToggle('showProfilePic')}
                color="primary"
              />
            }
            label="Show my profile picture"
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.showLocation}
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
                checked={formData.matchVerifiedOnly}
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
                checked={formData.allowRechat}
                onChange={handleToggle('allowRechat')}
                color="primary"
              />
            }
            label="Allow user to reconnect after chat"
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.autoDeleteChats}
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
                checked={formData.blockNSFW}
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
                checked={formData.allowExportData}
                onChange={handleToggle('allowExportData')}
                color="primary"
              />
            }
            label="Allow export of my data"
          />
        </Section>
      </BlurWrapper>
    </Box>
  );
}

export default Privacy;
