import React from 'react';
import {
    Box,
    Stack
} from '@/MUI/MuiComponents';

import {

} from '@/MUI/MuiIcons';
import NavigateWithArrow from '@/components/private/NavigateWithArrow'

function AccountDelete() {
    return (
        <Box component={'section'}>
            <Stack mb={2}>
                <NavigateWithArrow
                    redirectTo={'/connect/settings/account'}
                    text={'Delete Account'}
                />
            </Stack>
        </Box>
    )
}

export default AccountDelete;