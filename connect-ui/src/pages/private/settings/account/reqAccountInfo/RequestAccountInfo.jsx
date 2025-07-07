import React from 'react';
import {
  Box,

  Stack
} from '@/MUI/MuiComponents';

import {

} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow'

function RequestAccountInfo() {
  return (
    <Box component={'section'}>
      <Stack mb={2}>
        <NavigateWithArrow
          redirectTo={'/connect/settings/account'}
          text={'Request account info'}
        />
      </Stack>
    </Box>
  )
}

export default RequestAccountInfo;