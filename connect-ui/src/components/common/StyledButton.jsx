import React from 'react';
import { Button, useTheme } from '@/MUI/MuiComponents';
import { Link } from 'react-router-dom';

function StyledButton({
    icon,
    className,
    variant = 'outlined',
    type,
    text,
    redirectUrl,
    ...props
}) {
    const theme = useTheme();

    return (
        <Button
            component={Link}
            to={redirectUrl}
            startIcon={icon}
            type={type}
            variant={variant}
            sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 0.5, sm: 1 },
                bgcolor: 'rgba(255, 255, 255, 0.09)',
                backdropFilter: 'blur(4px)',
                boxShadow: `0 0 4px rgba(240, 235, 243, 0.1)`,
                border: 'none',
                borderTop: '1px dotted',
                borderBottom: '1px dotted',
                borderColor: 'text.primary',
                borderRadius: theme.shape.shape,
                textTransform: 'none',
                color: 'text.primary', // ✅ Best practice
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                },
            }}
            {...props}
        >
            {text}
        </Button>

    );
}

export default StyledButton;
