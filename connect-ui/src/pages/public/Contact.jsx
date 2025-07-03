import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, useTheme } from '@/MUI/MuiComponents';
import { SendIcon } from '../../MUI/MuiIcons';
import StyledText from '@/components/common/StyledText';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
  const theme = useTheme();

  React.useEffect(() => {
    document.title = 'Connect - Contact';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }

    if (!formData.message.trim()) errors.message = 'Message cannot be empty';

    setError(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      setIsSubmitting(true);
      // Simulate API Call
      await new Promise(res => setTimeout(res, 800));

      toast.success('Message sent successfully 🎉');

      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      <Typography variant="h5" fontWeight={600} textAlign="center" mb={4}>
        Get in {<StyledText text="Touch" />}
      </Typography>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          name="name"
          placeholder="Shiv Sankar"
          value={formData.name}
          onChange={handleChange}
          error={!!error.name}
          helperText={error.name}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            placeholder="connect@connect.com"
            value={formData.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
          />

          <TextField
            fullWidth
            label="Phone (optional)"
            variant="outlined"
            name="phone"
            placeholder="+91 896 001 5524"
            value={formData.phone}
            onChange={handleChange}
          />
        </Stack>

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
          error={!!error.message}
          helperText={error.message}
        />

        <Button
          type="submit"
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
          disabled={isSubmitting}
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
              transform: 'translateY(-10px)',
              bgcolor: 'rgba(255,255,255,0.08)',
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Drop a Line'}
        </Button>
      </Stack>

      {/* ToastContainer added locally */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </Box>
  );
}

export default Contact;
