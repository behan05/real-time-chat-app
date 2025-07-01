import { Box, Stack, Typography, useTheme } from '@/components/shared/mui';
import {
    PersonAddAlt1,
    AccountCircle,
    Settings,
    FilterAlt,
    VideoCall,
    Send,
    ChatBubbleOutline,
    Message,
    Security,
    Lock,
    Diversity3,
    Groups,
} from '@mui/icons-material';

import StyledText from "@/components/common/StyledText"
import theme from '@/styles/Theme/index';
import SignupBtn from './CustomBtn';
import LoginIcon from '@mui/icons-material/Login';

// Mapping icons dynamically
const iconMap = {
    // Well organized mapping with consistent sx styling
    PersonAddAlt1: <PersonAddAlt1 sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    AccountCircle: <AccountCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
    Settings: <Settings sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    FilterAlt: <FilterAlt sx={{ fontSize: 40, color: 'primary.main' }} />,
    VideoCall: <VideoCall sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    Send: <Send sx={{ fontSize: 40, color: 'primary.main' }} />,
    ChatBubbleOutline: <ChatBubbleOutline sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    Message: <Message sx={{ fontSize: 40, color: 'primary.main' }} />,
    Security: <Security sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    Lock: <Lock sx={{ fontSize: 40, color: 'primary.main' }} />,
    Diversity3: <Diversity3 sx={{ fontSize: 40, color: theme.palette.text.primary }} />,
    Groups: <Groups sx={{ fontSize: 40, color: 'primary.main' }} />,
};

function ConnectFeatures({
    label,
    title,
    highlightText,
    icon1,
    title1,
    icon2,
    title2,
    description,
}) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minWidth: 300,
                maxWidth: 600,
                boxShadow: '0 0 1px rgba(176, 71, 237, 0.1), 0 0 1px rgba(246, 112, 37, 0.1)', // Very subtle custom box shadow, good for minimalistic style
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                p: theme.spacing(4),
                flexGrow: 1,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 3,
            }}
        >
            {/* Top Section: Label and Title */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {/* Label Circle */}
                <Stack
                    borderRadius={'50%'}
                    width={50}
                    height={50}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontWeight="bold"
                    fontSize="1.2rem"
                    sx={{
                        backgroundColor: 'rgba(246, 112, 37, 0.5)',
                        backgroundImage:
                            'linear-gradient(135deg, rgba(176, 71, 237, 0.6) 0%, rgba(246, 112, 37, 0.5) 100%)',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(246, 112, 37, 1)',
                        },
                    }}
                >
                    {label}
                </Stack>

                {/* Title with highlighted part */}
                <Typography variant="h5" fontWeight="bold">
                    {title} {<TextStyle text={highlightText} />} {/* Good modular text styling */}
                </Typography>
            </Box>

            {/* Middle Section: Boxes and Connectors */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    position: 'relative',
                }}
            >
                {/* First Box */}
                <Box
                    sx={{
                        minWidth: 200,
                        maxWidth: 250,
                        borderRadius: 5,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(255, 102, 0, 0.1) 100%)',
                        bgcolor: 'rgba(43, 42, 42, 0.1)', // Semi-transparent dark bg
                        backdropFilter: 'blur(14px)', // Nice frosted glass effect
                        p: theme.spacing(3),
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        boxShadow: '0px 0px 20px rgba(0,0,0,0.2)', // Depth to boxes
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(20px)',
                        },
                    }}
                >
                    {iconMap[icon1]} {/* Dynamic icon rendering */}
                    <Typography variant="subtitle1" fontWeight="bold">
                        {title1}
                    </Typography>
                </Box>

                {/* Connector: Line + Arrow + Thunder Emoji */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {/* Line */}
                    <Box
                        sx={{
                            width: 2,
                            height: 20,
                            bgcolor: 'grey.500',
                            opacity: 0.5,
                            borderRadius: 1,
                        }}
                    />
                    {/* Thunder Emoji */}
                    <Typography color="primary">⚡</Typography>
                    {/* Line */}
                    <Box
                        sx={{
                            width: 2,
                            height: 20,
                            bgcolor: 'grey.500',
                            opacity: 0.5,
                            borderRadius: 1,
                        }}
                    />
                    {/* Arrow */}
                    <Box
                        sx={{
                            width: 20,
                            height: 20,
                            borderTop: '2px solid',
                            borderRight: '2px solid',
                            borderColor: 'primary.main',
                            transform: 'rotate(45deg)',
                            mt: 1,
                        }}
                    />
                </Box>

                {/* Second Box */}
                <Box
                    sx={{
                        minWidth: 200,
                        maxWidth: 250,
                        borderRadius: 5,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(255, 102, 0, 0.1) 100%)',
                        bgcolor: 'rgba(43, 42, 42, 0.1)',
                        backdropFilter: 'blur(14px)',
                        p: theme.spacing(3),
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        alignSelf: 'flex-end', // Smart positioning for variation
                        boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(-20px)',
                        },
                    }}
                >
                    {iconMap[icon2]} {/* Dynamic icon rendering */}
                    <Typography variant="subtitle1" fontWeight="bold">
                        {title2}
                    </Typography>
                </Box>
            </Box>

            {/* Bottom Section: Description and Signup Button */}
            <Typography variant="body1" mt={3} letterSpacing={0.2}>
                {description}
                <Box my={2}>
                    <SignupBtn icon={<LoginIcon />} text={'Claim Account'} redirectUrl={'/signup'} />{' '}
                    {/* Great idea to encourage signup */}
                </Box>
            </Typography>
        </Box>
    );
}

export default ConnectFeatures;