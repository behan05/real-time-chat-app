import React from 'react';
import { Typography } from '@mui/material';
import StyledText from '../common/StyledText';

const rotatingPhrases = [
    "Start Chatting Instantly",
    "Find New People Fast",
    "Match & Talk Freely",
    "Real-Time, Real People",
    "Smarter Conversations"
];

const Tagline = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Typography
            variant="body1"
            gutterBottom
            sx={{
                mt: 2,
                pr: 2,
                py: 0.5,
                borderRadius: '16px',
                fontWeight: 500,
                fontSize: '0.875rem',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                color: 'text.secondary',
                backdropFilter: 'blur(4px)',
                border: '1px dotted rgba(255, 255, 255, 0.15)',
                width: 'fit-content',
                transition: 'all 0.3s ease-in-out'
            }}
        >
            Sign Up in Seconds •{' '} <StyledText text={rotatingPhrases[index]} />
        </Typography>
    );
};

export default Tagline;
