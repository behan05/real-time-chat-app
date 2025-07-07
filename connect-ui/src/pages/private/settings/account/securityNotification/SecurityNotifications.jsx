import React from 'react';
import {
  Box,

  Stack
} from '@/MUI/MuiComponents';

import {

} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow'

function SecurityNotifications() {
  return (
    <Box component={'section'}>
      <Stack mb={2}>
        <NavigateWithArrow
          redirectTo={'/connect/settings/account'}
          text={'Security'}
        />
      </Stack>
    </Box>
  )
}

export default SecurityNotifications;
