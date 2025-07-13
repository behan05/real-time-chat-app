/*
Motivates users to finish their profile and understand usage.

Profile Completion Progress Bar

Last Seen / Account Created (optional)

Verification Status (optional – if you allow phone/email/photo verification)
*/

import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    useTheme
} from '../../../MUI/MuiComponents';

import { } from '../../../MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';

function CompletionAndActivity() {
    const theme = useTheme();
    return (
        <Box component={'section'}>
            {/* Header with arrow back icon */}
            <Stack mb={2}>
                <NavigateWithArrow redirectTo={'/connect/profile'} text={'Completion And Activity'} />
            </Stack>


            {/* <Divider sx={{ my: 2 }} /> */}
        </Box>
    )
}

export default CompletionAndActivity