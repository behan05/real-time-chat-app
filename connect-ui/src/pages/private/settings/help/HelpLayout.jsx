import { Box } from '@/MUI/MuiComponents';
import { Outlet } from 'react-router-dom';

function HelpLayout() {
    return (
        <Box component={'section'} sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            borderRight: '1px solid rgba(112, 106, 106, 0.3)',
            minHeight: '100vh',
            maxHeight: '100vh',
            overflowY: 'auto'
        }}>
            <Outlet />
        </Box>
    )
}

export default HelpLayout;