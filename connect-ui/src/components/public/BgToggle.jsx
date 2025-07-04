import {
    IconButton,
    Tooltip,
    useTheme,
} from '@/MUI/MuiComponents';
import {
    CheckCircleOutlineIcon,
    SwapHorizIcon,
} from '@/MUI/MuiIcons';
import React from 'react';

function BgToggle() {
    const theme = useTheme();
    
    const [videoChanged, setVideoChanged] = React.useState(false);

    const handleChangeVideo = () => {
        const next = !videoChanged;
        setVideoChanged(next);
        localStorage.setItem('currentVideo', next.toString());
        window.dispatchEvent(new Event('storage')); // force other components to re-read
    };
    return (
        <Tooltip
            title={
                videoChanged ? 'Revert Background Video' : 'Change Background Video'
            }
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: 'transparent',
                        boxShadow: `inset 0 0 2px ${theme.palette.secondary.dark}`,
                        color: theme.palette.text.primary,
                        px: 1.5,
                        py: 0.8,
                        fontSize: '0.85rem',
                        backdropFilter: 'blur(4px)',
                    },
                },
                arrow: {
                    sx: {
                        color: theme.palette.secondary.main
                    }
                }
            }}
        >
            <IconButton onClick={handleChangeVideo}>
                {videoChanged ? (
                    <CheckCircleOutlineIcon sx={{ color: 'success.main' }} />
                ) : (
                    <SwapHorizIcon sx={{ color: 'text.primary' }} />
                )}
            </IconButton>
        </Tooltip>
    )
}

export default BgToggle