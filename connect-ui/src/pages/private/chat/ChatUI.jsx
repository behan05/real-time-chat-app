import React, { useState } from 'react';
import { Box, Stack } from '@/MUI/MuiComponents';
import { Outlet } from 'react-router-dom';
import ChatWindow from './ChatWindow';

function ChatUI() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <Box display="flex" bgcolor="background.default">
      {/* Left Side: Sidebar OR Settings */}
      <Stack flex={1}>
        <Outlet />
      </Stack>

      {/* Right Side: Chat always visible */}
      <Stack flex={2.5} sx={{ display: 'flex', flexDirection: 'column' }}>
        <ChatWindow selectedUserId={selectedUserId} />
      </Stack>
    </Box>
  );
}

export default ChatUI;

