import React from 'react';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Tooltip
} from '../../../MUI/MuiComponents';
import { SettingsIcon } from '../../../MUI/MuiIcons';

import ChatSidebarPanelNavbar from './ChatSidebarPanelNavbar';
import { chatPartners } from '../mockData';
import { Link } from 'react-router-dom';

const ChatSidebar = ({ onUserSelect }) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      bgcolor="background.paper"
      minWidth={300}
      px={2}
      sx={{
        minHeight: '100vh',
        maxHeight: '100vh',
        overflowY: 'auto',
        borderRight: '1px solid rgba(112, 106, 106, 0.3)'
      }}
    >
      <ChatSidebarPanelNavbar />

      <List disablePadding>
        {chatPartners.map((user) => (
          <ListItemButton
            key={user.id}
            onClick={() => onUserSelect(user.id)}
            sx={{
              borderRadius: 1
            }}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} alt={user.name} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            />
          </ListItemButton>
        ))}
      </List>

      {/* Floating Settings icon at bottom of sidebar */}
      <Box
        sx={{
          p: 1.5,
          position: 'sticky',
          bottom: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 'fit-content',
          ml: '82%'
        }}
      >
        <Tooltip title="Settings">
          <IconButton
            component={Link}
            to="settings"
            sx={{
              boxShadow: 3,
              '&:hover .rotate-icon': {
                transform: 'rotate(230deg)',
                transition: 'transform 0.4s ease-in-out'
              }
            }}
          >
            <SettingsIcon className="rotate-icon" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ChatSidebar;
