import React from 'react';
import { Button, useTheme } from '@/MUI/MuiComponents';

const StyledActionButton = ({
  children,
  endIcon,
  onClick,
  type = 'button',
  disabled = false,
  sx = {}
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      type={type}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      sx={{
        mt: 2,
        alignSelf: 'center',
        border: 'none',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        borderBottom: `1px dotted ${theme.palette.success.main}`,
        backdropFilter: 'blur(14px)',
        backgroundColor: 'transparent',
        color: 'primary.contrastText',
        textTransform: 'none',
        letterSpacing: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)'
        },
        ...sx
      }}
    >
      {children}
    </Button>
  );
};

export default StyledActionButton;
