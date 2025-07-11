import React from 'react';
import {
  Box,
  useTheme,
  Stack,
  Typography,
  Button,
} from '@/MUI/MuiComponents';
import {
  DownloadIcon,
  CheckCircleIcon,
} from '@/MUI/MuiIcons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import StyledText from '@/components/common/StyledText';

function RequestAccountInfo() {
  const theme = useTheme();
  const [requested, setRequested] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate request
    setTimeout(() => {
      setIsLoading(false);
      setRequested(true);
      toast.success('Account info downloaded success!');
    }, 1200);
  };

  return (
    <Box component={'section'}>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* Back Button */}
      <Stack mb={2}>
        <NavigateWithArrow
          redirectTo={'/connect/settings/account'}
          text={'Request account info'}
        />
      </Stack>

      {/* Form Box */}
      <Box
        component={'form'}
        onSubmit={handleRequest}
        minWidth={300}
        sx={{
          py: 4,
          px: 1,
          borderRadius: 1,
          maxWidth: 800,
          mx: 'auto',
          backdropFilter: 'blur(14px)',
          backgroundColor: 'transparent',
          boxShadow: `inset 1px 1px 0.2rem ${theme.palette.text.secondary}`,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography textAlign="center" variant="h5" fontWeight={600}>
            Account <StyledText text="Information" />
          </Typography>

          <Typography
            variant="body2"
            fontWeight={400}
            color="text.secondary"
            textAlign="center"
          >
            View and manage the details associated with your account.
            You can request a summary of your account activity and information.
          </Typography>

          <Button
            variant="outlined"
            type="submit"
            startIcon={requested ? <CheckCircleIcon /> : <DownloadIcon />}
            disabled={isLoading || requested}
            sx={{
              px: 4,
              color: 'text.primary',
              background: 'transparent',
              boxShadow: `inset 0 1px 1px ${theme.palette.success.main}`,
              transition: 'all 0.3s',
              '&:hover': {
                boxShadow: `inset 0 -1px 1px ${theme.palette.success.main}`,
                transform: 'translateY(-5px)',
                background: 'transparent',
              }
            }}
          >
            {requested ? 'Requested' : isLoading ? 'Requesting...' : 'Request Info'}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default RequestAccountInfo;
