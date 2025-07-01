import { Box } from '@/MUI/MuiComponents';

function StyledText({ text }) {
    return (
        <Box
            component={'span'}
            sx={{
                background: 'linear-gradient(270deg, #b355d1, #ccc, #f67025, #B047ED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
            }}
        >
            {text}
        </Box>
    )
}

export default StyledText