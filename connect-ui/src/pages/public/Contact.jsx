import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, useTheme } from '@/MUI/MuiComponents';
import { SendIcon } from '../../MUI/MuiIcons';
import StyledText from '@/components/common/StyledText';

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // You can later replace this with your backend logic (Node.js/Email API etc.)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 6,
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        borderRadius: 2,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        maxWidth: 700,
        mx: 'auto',
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        mb={4}
      >
        Get in {<StyledText text={'Touch'} />}
      </Typography>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          name="name"
          placeholder='Shiv Sankar'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          name="email"
          placeholder='connect@connect.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          name="message"
          multiline
          minRows={4}
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
          sx={{
            alignSelf: 'flex-end',
            width: { xs: '100%', sm: 'fit-content' },
            bgcolor: 'transparent',
            letterSpacing: 1,
            fontWeight: 600,
            textTransform: 'none',
            color: theme.palette.text.primary,
            border: 'none',
            borderTop: `1px dotted ${theme.palette.text.secondary}`,
            borderBottom: `1px dotted ${theme.palette.text.secondary}`,
            transition: 'all 0.3s',
            "&:hover": {
              transform: 'translateY(-10px)'
            }
          }}

        >
          Drop a Line
        </Button>
      </Stack>
    </Box>
  );
}

export default Contact;
