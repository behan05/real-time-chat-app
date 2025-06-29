import React from 'react';
import { Box, Button } from '@/MUI/MuiComponents';
import { Link } from 'react-router-dom';
import theme from '@/styles/Theme';

function StyledButton(
    { icon, className, type, text, redirectUrl, ...props }) {
    return (
        <Button
            component={Link}
            to={redirectUrl}
            startIcon={icon}
            type={type}
            variant="outlined"
            sx={{
                borderRadius: '8px',
                px: 3,
                py: 1,
                color: theme.palette.text.primary,
                border: 'none',
                textTransform: 'none',
                bgcolor: 'rgba(255, 255, 255, 0.09)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 0 4px rgba(240, 235, 243, 0.1)',
            }}
            {...props}
        >
            {text}
        </Button>
    )
}

export default StyledButton