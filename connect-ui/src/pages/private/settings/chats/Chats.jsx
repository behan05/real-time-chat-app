import React from 'react';
import { Box, Stack } from '../../../../MUI/MuiComponents';
import {} from '../../../../MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';

function Chats() {
  return (
    <Box>
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/settings'} text={'Chats'} />
      </Stack>
    </Box>
  );
}

export default Chats;
