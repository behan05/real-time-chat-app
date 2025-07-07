import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from '../../../../MUI/MuiComponents';

import {
  SecurityIcon,
  InfoIcon,
  DeleteForeverIcon
} from '../../../../MUI/MuiIcons';
import NavigateWithArrow from '../../../../components/private/NavigateWithArrow'

import { Link } from 'react-router-dom';

function Account() {

  const accountItems = [
    {
      icon: <SecurityIcon fontSize='small' sx={{ color: 'text.secondary' }} />,
      label: 'Security notifications',
      path: 'security'
    },
    {
      icon: <InfoIcon fontSize='small' sx={{ color: 'text.secondary' }} />,
      label: 'Request account info',
      path: 'info'
    },
    {
      icon: <DeleteForeverIcon fontSize='small' sx={{ color: 'text.secondary' }} />,
      label: 'Delete my account',
      path: 'delete'
    },
  ];

  return (
    <Box component={'section'}>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/settings'} text={'Account'} />
      </Stack>

      <List>
        {accountItems.map((item, i) => (
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
    </Box>
  )
}

export default Account;