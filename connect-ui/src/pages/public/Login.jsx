import StyledText from '@/components/common/StyledText';
import ReusableVideo from '@/components/public/ReusableVideo';
import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  MuiLink,
  Button,
  IconButton,
  Stack,
  Checkbox,
  FormControlLabel,
  Divider
} from '@/MUI/MuiComponents';
import * as React from 'react';
import {
  VisibilityIcon,
  VisibilityOffIcon,
  SendIcon,
  GoogleIcon,
  XIcon,
  FacebookIcon,
  AppleIcon
} from '@/MUI/MuiIcons';
import { Link } from 'react-router-dom';

function Login() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  React.useEffect(() => {
    document.title = 'COnnect - Login';
  }, []);

  // Form state to handle user input
  const [form, setForm] = React.useState({
    username: '',
    password: ''
  });

  // Error state to show validation errors
  const [error, setError] = React.useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = React.useState(false);

  // Handle input change and update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Social media login simulation
  const handleSocialLogin = (platform) => {
    switch (platform) {
      case 'google':
        console.log('Redirecting to Google login...');
        // Implement Google login logic here
        break;
      case 'facebook':
        console.log('Redirecting to Facebook login...');
        // Implement Facebook login logic here
        break;
      case 'apple':
        console.log('Redirecting to Apple login...');
        // Implement Apple login logic here
        break;
      case 'x':
        console.log('Redirecting to X (Twitter) login...');
        // Implement X (Twitter) login logic here
        break;
      default:
        console.log('Unknown platform');
    }
  };

  return (
    <Box
      sx={{
        m: '1.5rem auto',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        flexGrow: 1,
        gap: 2,
        py: isLg ? theme.spacing(3) : theme.spacing(10)
      }}
    >
      {/* Left side content for larger screens */}
      {!isLg && (
        <Box flex={1}>
          <Typography
            variant="h5"
            fontSize={'3rem'}
            letterSpacing={1}
            color={theme.palette.text.primary}
          >
            <StyledText text={'Connect'} />
          </Typography>

          <Typography variant="subtitle1" color={theme.palette.text.secondary} mb={3}>
            Connect is a real-time random chatting webapp, powered by{' '}
            <StyledText text={'interest-based'} /> matching. 100% <StyledText text={'India'} />{' '}
            platform designed for genuine conversations anytime, anywhere.
          </Typography>

          {/* === Reusable Video Component === */}
          <ReusableVideo />
        </Box>
      )}

      {/* Right side login form */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          py: 1
        }}
      >
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography
            variant="h3"
            textTransform={'uppercase'}
            letterSpacing={1}
            fontWeight={600}
            textAlign={'center'}
            color={theme.palette.text.primary}
          >
            Hey <StyledText text={'Connects'} />!
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign={'center'}
            maxWidth={400}
            color={'text.secondary'}
            gutterBottom
          >
            Sign in to connect with people and make meaningful conversations.
          </Typography>

          {/* Username Input */}
          <TextField
            variant="outlined"
            label="Username or Email"
            name="username"
            onChange={handleChange}
            value={form.username}
            fullWidth
            error={Boolean(error.username)}
            helperText={error.username}
          />

          {/* Password Input */}
          <TextField
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            label="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
            fullWidth
            error={Boolean(error.password)}
            helperText={error.password}
            InputProps={{
              endAdornment: (
                <IconButton position="end" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}{' '}
                  {/* Eye icon toggle */}
                </IconButton>
              )
            }}
          />

          {/* Link to signup page */}
          <Stack gap={1}>
            <Typography>
              New to <StyledText text={'Connect'} /> ?
              <MuiLink
                component={Link}
                to="/register"
                sx={{ color: theme.palette.text.secondary, textDecoration: 'underline', ml: 0.5 }}
              >
                Create an Account
              </MuiLink>
            </Typography>
          </Stack>

          {/* Remember me checkbox and forgot password link */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <MuiLink
              component={Link}
              to="/forgot-password"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: 'underline',
                fontSize: '0.875rem'
              }}
            >
              Forgot your password?
            </MuiLink>
          </Stack>

          {/* Login button */}
          <Button
            type="submit"
            variant="outlined"
            endIcon={<SendIcon sx={{ color: 'success.main' }} />}
            size="large"
            sx={{
              alignSelf: 'flex-end',
              px: { xs: 2, sm: 3 },
              py: { xs: 0.5, sm: 1 },
              background: `transparent`,
              backdropFilter: 'blur(14px)',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              border: `1px dotted ${theme.palette.success.main}`,
              textTransform: 'none',
              color: 'primary.contrastText',
              letterSpacing: 0.2,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            Login
          </Button>

          {/* Divider with 'or' text */}
          <Divider sx={{ my: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: '0.9rem', color: theme.palette.text.secondary }}
            >
              <StyledText text={'or'} />
            </Typography>
          </Divider>

          {/* Social login icons */}
          <Stack direction={'row'} m={'auto'} gap={2}>
            <IconButton edge="start" onClick={() => handleSocialLogin('google')}>
              <GoogleIcon />
            </IconButton>
            <IconButton edge="start" onClick={() => handleSocialLogin('apple')}>
              <AppleIcon />
            </IconButton>
            <IconButton edge="start" onClick={() => handleSocialLogin('x')}>
              <XIcon />
            </IconButton>
            <IconButton edge="start" onClick={() => handleSocialLogin('facebook')}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
