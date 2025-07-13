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
Used by your algorithm to pair users.

Looking For (e.g., Male, Female, Other)

Preferred Age Range (Slider or min/max fields)

Preferred Language(s) (Multiselect)

Location

Current city (optional or based on IP)

Match nearby / global toggle (e.g., if user wants to find only people nearby or anyone worldwide)

*/
function MatchingPreferences() {
  return (
    <Box component={'section'}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/profile'} text={'Matching Preferences'} />
      </Stack>


      {/* <Divider sx={{ my: 2 }} /> */}
    </Box>
  )
}

export default MatchingPreferences;