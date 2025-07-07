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
    <Box component={'section'} sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.paper',
      borderRight: '1px solid rgba(112, 106, 106, 0.3)',
      minHeight: '100vh',
      maxHeight: '100vh'
    }}>
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
