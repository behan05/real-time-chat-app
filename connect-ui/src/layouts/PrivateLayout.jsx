import React from 'react';
import { Box, Stack, useTheme, useMediaQuery } from '../MUI/MuiComponents';

function PrivateLayout() {
  const theme = useTheme();
  
  return (
    <Box
      component={'section'}
      display={'flex'}
      bgcolor={'background.default'}
    >
      <Stack
        flex={1}
        component={'section'}
        maxHeight={'100vh'}
        p={2}
      >
        sidebar
      </Stack>
      <Stack
        flex={2.5}
        component={'section'}
        maxHeight={'100vh'}
      >
        display
      </Stack>
    </Box>
  )
}

export default PrivateLayout;
