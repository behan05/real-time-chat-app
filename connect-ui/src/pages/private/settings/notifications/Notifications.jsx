import React from 'react';
import { Box, Stack } from '../../../../MUI/MuiComponents';
import { } from '../../../../MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow'

function Notifications() {
  return (
    <Box>
      <Stack mb={2}>
        <NavigateWithArrow
          redirectTo={'/connect/settings'}
          text={'Notifications'}
        />
      </Stack>
    </Box>
  )
}

export default Notifications;