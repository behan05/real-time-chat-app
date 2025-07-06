import React from 'react';
import {
    Box,
    Menu,
    MenuItem,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    useTheme,
    Divider,
} from '@/MUI/MuiComponents';
import {
    ShuffleIcon,
    ChatIcon,
    ArchiveIcon,
    PersonIcon,
    MoreVertIcon,
    LogoutIcon,
    HelpOutlineIcon,
    SettingsIcon,
    SearchIcon,
} from '@/MUI/MuiIcons';
import { NavLink, useLocation } from 'react-router-dom';
import StyledText from '@/components/common/StyledText';
import { TextField } from '@mui/material';


function ChatSidebarpanelnavbar() {
    const theme = useTheme();
    const location = useLocation();
    const pathName = location.pathname;
    let currentPath = '';

    switch (pathName) {
        case '/connect': currentPath = 'Connect'
            break;
        case '/random-chat': currentPath = 'Random Connect'
            break;
        case '/archive': currentPath = 'Archive'
            break;
        case '/chat': currentPath = 'Chat'
            break;

        default:
            break;
    }

    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(menuAnchorEl);

    const [searchValue, setSearchValue] = React.useState('');

    const navItems = [
        {
            path: '/random-chat',
            icon: <ShuffleIcon />,
            title: 'Random Chat',
        },
        {
            path: '/chat',
            icon: <ChatIcon />,
            title: 'Chat',
        },
        {
            path: '/archive',
            icon: <ArchiveIcon />,
            title: 'Archived Chats',
        },
    ];

    const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
    const handleMenuClose = () => setMenuAnchorEl(null);

    return (
        <Box
            display="flex"
            flexDirection="column"
            bgcolor="background.paper"
            p={2}
        >
            {/* Header */}
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h5" fontWeight={600} letterSpacing={1}>
                    <StyledText text={currentPath} />
                </Typography>

                <Stack direction="row">
                    {navItems.map(({ path, icon, title }) => (
                        <Tooltip key={title} title={title} arrow>
                            <IconButton component={NavLink} to={path}>
                                {icon}
                            </IconButton>
                        </Tooltip>
                    ))}

                    <Tooltip title="Menu" arrow>
                        <IconButton onClick={handleMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>

            {/* Search...  */}
            <Stack spacing={1} my={1}>
                <TextField
                    placeholder="Search people..."
                    variant="outlined"
                    fullWidth
                    name="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    size="small"
                    InputProps={{
                        startAdornment:
                            <SearchIcon fontSize="small" sx={{ mr: 1 }}
                            />
                    }}
                />
            </Stack>
            {/* Dropdown Menu */}
            <Menu
                anchorEl={menuAnchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MenuItem onClick={handleMenuClose} component={NavLink} to={'/profile'}>
                    <PersonIcon fontSize='small' sx={{ mr: 1 }} />
                    Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={NavLink} to={'/settings'}>
                    <SettingsIcon fontSize='small' sx={{ mr: 1 }} />
                    Settings
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={NavLink} to={'/support'}>
                    <HelpOutlineIcon fontSize="small" sx={{ mr: 1 }} />
                    Help
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleMenuClose} component={NavLink} to={'/logout'}>
                    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default ChatSidebarpanelnavbar