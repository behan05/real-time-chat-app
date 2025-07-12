import React from 'react';
import { Box, Stack } from '@/MUI/MuiComponents';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import PrivacyPolicyPage from '@/components/common/PrivacyPolicyPage';

function HelpPrivacyPolicy() {
  React.useEffect(() => {
    document.title = 'Connect - Privacy Policies';
  }, []);

  return (
    <Box>
      {/* Header with arrow back icon */}
      <Stack mb={2}>
        <NavigateWithArrow redirectTo={'/connect/settings/help'} text={'Privacy'} />
      </Stack>

      <PrivacyPolicyPage />
    </Box>
  );
}

export default HelpPrivacyPolicy;
