import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack
} from '../../../../MUI/MuiComponents';

import {
    HelpOutlineIcon,
    SupportAgentIcon,
    GavelIcon,
    BugReportIcon,
} from '../../../../MUI/MuiIcons';
import NavigateWithArrow from '../../../../components/private/NavigateWithArrow'

import { Link } from 'react-router-dom';

function Help() {

    const helpItems = [
        {
            icon: <HelpOutlineIcon fontSize="small" sx={{ color: 'text.secondary' }} />,
            label: 'FAQs (Frequently Asked Questions)',
            path: 'faqs',
        },
        {
            icon: <SupportAgentIcon fontSize="small" sx={{ color: 'text.secondary' }} />,
            label: 'Contact Support',
            path: 'contact',
        },
        {
            icon: <GavelIcon fontSize="small" sx={{ color: 'text.secondary' }} />,
            label: 'Terms & Policies',
            path: 'policies',
        },
        {
            icon: <BugReportIcon fontSize="small" sx={{ color: 'text.secondary' }} />,
            label: 'Report a Problem',
            path: 'report',
        },
    ];

    return (
        <Box component={'section'}>
            {/* Header with arrow back icon */}
            <Stack mb={2}>
                <NavigateWithArrow redirectTo={'/connect/settings'} text={'Account'} />
            </Stack>

            <List>
                {helpItems.map((item, i) => (
                    <ListItemButton
                        key={i}
                        disableGutters
                        component={Link}
                        to={item.path}
                        sx={{ p: 2, borderRadius: 1 }}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>
            <Divider sx={{my: 3}}/>
        </Box>
    )
}

export default Help;