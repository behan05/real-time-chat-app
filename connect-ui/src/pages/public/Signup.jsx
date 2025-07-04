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
  Divider,
} from '@/MUI/MuiComponents';
import * as React from 'react';
import {
  VisibilityIcon,
  VisibilityOffIcon,
  SendIcon,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
  XIcon,
} from '@/MUI/MuiIcons';
import { Link } from 'react-router-dom';

function Signup() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  React.useEffect(() => {
    document.title = 'Connect - Create an Account';
  }, []);

  const [form, setForm] = React.useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = React.useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = React.useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false); // State to toggle confirm password visibility

  // Handle form field changes
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  // Toggle confirm password visibility
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  // Handle social media login (Google, Facebook, Apple, Twitter)
  const handleSocialLogin = platform => {
    switch (platform) {
      case 'google':
        console.log('Redirecting to Google signup...');
        break;
      case 'facebook':
        console.log('Redirecting to Facebook signup...');
        break;
      case 'apple':
        console.log('Redirecting to Apple signup...');
        break;
      case 'x':
        console.log('Redirecting to X (Twitter) signup...');
        break;
      default:
        console.log('Unknown platform');
    }
  };

  return (
    <Box
      sx={{
        m: '0 auto',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        flexGrow: 1,
        gap: 2,
        py: isLg ? theme.spacing(3) : theme.spacing(10),
      }}
    >
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
            Join <StyledText text={'Connect'} /> and experience genuine, interest-based
            connections.
          </Typography>

          {/* === Reusable Video Component === */}
          <ReusableVideo />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
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
            <StyledText text={'Create'} /> Account
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign={'center'}
            maxWidth={400}
            color={'text.secondary'}
            gutterBottom
          >
            Sign up and start making meaningful conversations.
          </Typography>

          {/* Name Input */}
          <TextField
            variant="outlined"
            label="Full Name"
            name="name"
            onChange={handleChange}
            value={form.name}
            fullWidth
            error={Boolean(error.name)}
            helperText={error.name}
          />

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
            helperText={error.password || 'Minimum 6 characters required'}
            InputProps={{
              endAdornment: (
                <IconButton position="end" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />

          {/* Confirm Password Input */}
          <TextField
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={form.confirmPassword}
            fullWidth
            error={Boolean(error.confirmPassword)}
            helperText={error.confirmPassword}
            InputProps={{
              endAdornment: (
                <IconButton position="end" onClick={handleClickShowConfirmPassword}>
                  {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />

          {/* Already have account */}
          <Stack>
            <Typography>
              Already have an account?{' '}
              <MuiLink
                component={Link}
                to="/login"
                sx={{ color: theme.palette.text.secondary, textDecoration: 'underline', ml: 0.5 }}
              >
                Login
              </MuiLink>
            </Typography>
          </Stack>

          {/* Remember me */}
          <FormControlLabel control={<Checkbox />} label="Remember me" />

          {/* Signup Button */}
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
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
              border: `1px dotted ${theme.palette.success.main}`,
              textTransform: 'none',
              color: 'primary.contrastText',
              letterSpacing: 0.2,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            Create Account
          </Button>

          <Divider sx={{ my: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: '0.9rem', color: theme.palette.text.secondary }}
            >
              <StyledText text={'or'} />
            </Typography>
          </Divider>

          {/* Social signup */}
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

export default Signup;