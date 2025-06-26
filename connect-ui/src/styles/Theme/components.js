export const components = {
  MuiTooltip: {
    styleOverrides: {
      Tooltip: {
        backgroundColor: '#222', // custom background
        color: '#fff', // custom text color
        fontSize: '0.875rem', // adjust font size
        borderRadius: 8,
        padding: '8px 12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }
    },
    defaultProps: {
      arrow: true, // enable arrow by default
      placement: 'top' // default position
    }
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none', // disable ALL CAPS
        borderRadius: '8px', // rounder corners
        fontWeight: 600,
        padding: '8px 20px',
        boxShadow: 'none'
      },
      containedPrimary: {
        backgroundColor: '#1e88e5',
        '&:hover': {
          backgroundColor: '#1565c0'
        }
      }
    },
    defaultProps: {
      disableElevation: true
    }
  }
};
