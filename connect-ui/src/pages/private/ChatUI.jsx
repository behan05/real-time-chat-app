import React from 'react';
import { Box, Stack, useTheme, useMediaQuery } from '../../MUI/MuiComponents';
import ChatHeader from './chat/ChatHeader';
import ChatSidebar from './chat/ChatSidebar';
import ChatWindow from './chat/ChatWindow';

// Main layout that combines the whole chat system — sidebar + chat window
function ChatUI() {
  const theme = useTheme();

  return (
    <Box
      component={'section'}
      display={'flex'}
      bgcolor={'background.default'}
      gap={1}
    >
      <Stack
        flex={1}
        component={'section'}
      >
        <ChatSidebar />
      </Stack>

      {/* Main Section */}
      <Stack
        flex={2.5}
        component={'section'}
        maxHeight={'100vh'}
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Chat Header */}
        <Stack component={'section'}>
          <ChatHeader />
        </Stack>

        {/* Chat Window */}
        <Stack component={'section'}>
          <ChatWindow />
        </Stack>
      </Stack>
    </Box>
  )
}

export default ChatUI;