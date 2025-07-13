export const components = {
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      placement: 'top',
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: 'transparent', // darker and cleaner than #222
        color: '#f5f5f5', // soft white for better contrast
        fontSize: '0.85rem', // subtle and readable
        borderRadius: 6, // slightly tighter than 8
        padding: '6px 12px',
        boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.3)', // smoother elevation
        backdropFilter: 'blur(6px)', // adds modern glass effect
        WebkitBackdropFilter: 'blur(6px)', // Safari support
        maxWidth: 220, // avoid overly wide tooltips
        transition: 'all 0.2s ease-in-out', // subtle animation
      },
      arrow: {
        color: '#051222ff',
      }
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
