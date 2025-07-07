import React from 'react';
import { Box } from '../../../MUI/MuiComponents';
import ChatHeader from './ChatHeader';

const ChatWindow = ({ selectedUserId }) => {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      sx={{
        maxHeight: '100vh',
        minHeight: '100vh',
        bgcolor: "background.paper",
      }}
    >
      <ChatHeader userId={selectedUserId} />
      {/* Add message list and input box below */}
    </Box>
  );
};

export default ChatWindow;
