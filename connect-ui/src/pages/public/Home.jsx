import React from 'react';
import { Box, Stack, Typography, useTheme } from '../../MUI/MuiComponents';
import socialVideo from '../../assets/videos/socialVideo.mp4';
import StyledButton from '../../components/common/StyledButton'
import StyledText from '../../components/common/StyledText';

function Home() {

  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
        gap: 2,
        flexGrow: 1,
        minHeight: '70vh',
      }}>
        <Stack flex={1} justifyContent="center">
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{ color: 'text.primary' }}
          >
            {<StyledText text={'Talk Freely.'} />}{' '} Connect Instantly.
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 640 }}>
            Connect is a modern chat platform that pairs you with random users across the globe in seconds. Whether you're looking to make new friends, share stories, learn languages, or simply pass time — it's your gateway to real-time human connection.
          </Typography>

          {/* CTA */}
          <Stack direction={'row'} gap={2} my={2}>
            <StyledButton
              text={'Start Connecting'}
              redirectUrl={'/register'}
            />
            <StyledButton
              text={'Learn More...'}
              redirectUrl={'/about'}
            />
          </Stack>
        </Stack>

        <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
          <Box
            component={'video'}
            src={socialVideo}
            alt='social video on landing page'
            aria-label='social video on landing page'
            autoPlay
            loop
            muted
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              bgcolor: 'transparent',
              backdropFilter: 'blur(14px)',
              objectFit: 'cover',
              borderRadius: 12,
              boxShadow: 3,
              borderBottom: `2px dotted ${theme.palette.warning.main}`,
            }}
          />
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default Home;
