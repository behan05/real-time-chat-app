import React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from '@/MUI/MuiComponents';
import socialVideo from '@/assets/videos/socialVideo.mp4';
import StyledButton from '@/components/common/StyledButton'
import StyledText from '@/components/common/StyledText';
import Tagline from '@/components/public/Tagline';
import {
  ChatBubbleOutlineIcon,
  BoltOutlinedIcon,
  WorkspacePremiumOutlinedIcon,
  HelpOutlineIcon,
} from '@/MUI/MuiIcons'

import HowItWorks from '@/components/public/HowItWorks';
import ConnectFeatures from '../../components/public/ConnectFeatures';

function Home() {

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <React.Fragment>
      {/* ===  Hero / Slogan Section === */}
      <Box sx={{
        display: 'flex',
        flexDirection: isLg ? 'column' : 'row',
        gap: 2,
        flexGrow: 1,
        minHeight: '70vh',
      }}>
        <Stack flex={1} justifyContent="center">
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: 'text.primary' }}
          >
            {<StyledText text={'Talk Freely.'} />}{' '} Connect Instantly.
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 640 }}>
            Connect is a modern chat platform that pairs you with random users across the globe in seconds. Whether you're looking to make new friends, share stories, learn languages, or simply pass time it's your gateway to real-time human connection.
          </Typography>

          {/* === Calling tagline component === */}
          <Tagline />

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

      {/* ===  How It Works Section === */}
      <HowItWorks />

      {/* ===  Connect-Features Section === */}
      < Box >
        <Typography
          variant='h5'
          fontWeight={500}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <BoltOutlinedIcon fontSize='medium' />
          Connect {' '}{<StyledText text={'Features'} />}
        </Typography>

        <ConnectFeatures />
      </Box >

      {/* === Why Choose Us? Section === */}
      < Box >
        <Typography
          variant='h5'
          fontWeight={500}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <WorkspacePremiumOutlinedIcon fontSize={'medium'} />
          Why {' '}{<StyledText text={'Choose Us?'} />}
        </Typography>
      </Box >

      {/* === Testimonials |What Users Are Saying Section === */}
      < Box >
        <Typography
          variant='h5'
          fontWeight={500}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <ChatBubbleOutlineIcon fontSize='medium' />
          What Users Are {' '}{<StyledText text={'Saying'} />}
        </Typography>
      </Box >

      {/* === Frequently Asked Questions FAQ Section === */}
      < Box >
        <Typography
          variant='h5'
          fontWeight={500}
          textTransform={'uppercase'}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <HelpOutlineIcon fontSize='medium' />
          Frequently Asked {' '}{<StyledText text={'Questions'} />}
        </Typography>
      </Box >
    </React.Fragment >
  );
}

export default Home;
