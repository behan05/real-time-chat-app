import React from 'react';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from '../../../MUI/MuiComponents';

import { } from '../../../MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';

/* 
Tags / Interests
Used for interest-based matching or filtering.

Predefined tag chips (e.g., #music, #travel, #books)

Option to add custom tags (limit to 3–5)
*/
function TagsAndInterests() {
  return (
    <Box component={'section'}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/profile'} text={'Tags And Interests'} />
      </Stack>


      {/* <Divider sx={{ my: 2 }} /> */}
    </Box>
  )
}

export default TagsAndInterests;