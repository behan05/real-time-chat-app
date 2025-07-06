import React from 'react';
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
  Divider,
} from '../../../MUI/MuiComponents';
import {
  SettingsIcon,
} from '../../../MUI/MuiIcons';
import { NavLink } from 'react-router-dom';
import StyledText from '../../../components/common/StyledText';
import ChatSidebarpanelnavbar from '../../../components/private/ChatSidebarpanelnavbar';

const ChatSidebar = () => {

  return (
    <Box
      display="flex"
      flexDirection="column"
    >

      {/* === Chat sidebar header === */}
      <ChatSidebarpanelnavbar />

      
    </Box>
  );
};

export default ChatSidebar;
