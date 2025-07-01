import React from 'react';
import { Box, Typography, Stack, useTheme } from '../../MUI/MuiComponents';
import ConnectFeatures from '../../components/public/ConnectFeatures';
import StyledText from '../../components/common/StyledText';

function Features() {
  const theme = useTheme();

  return (
    <Box>
      {/* Section Heading */}
      <Stack spacing={2} textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold">
          Explore Our {" "} {<StyledText text="Features" />}
        </Typography>

        <Box display="flex" justifyContent="center" >
          <Typography
            variant="body2"
            component="section"
            maxWidth="700px"
            textAlign="center"
            sx={{
              color: theme.palette.text.secondary
            }}
          >
            Discover how our platform helps you connect meaningfully with others.
            From intelligent matching to real-time messaging and profile customization,
            we've built everything to make your experience seamless and secure.
          </Typography>
        </Box>
      </Stack>

      {/* Features Grid */}
      <ConnectFeatures />
    </Box>
  );
}

export default Features;
