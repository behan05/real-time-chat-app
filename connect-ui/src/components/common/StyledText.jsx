import { Box, useTheme } from '@/MUI/MuiComponents';

function StyledText({ text }) {
  const theme = useTheme();
  return (
    <Box
      component={'span'}
      sx={{
        background: `
                linear-gradient(270deg, #b355d1, #ccc, 
                ${theme.palette.warning.main}, #B047ED)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
      }}
    >
      {text}
    </Box>
  );
}

export default StyledText;
