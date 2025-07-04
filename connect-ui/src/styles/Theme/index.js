import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { palette } from './palette';
import { shape } from './shape';
import { components } from './components';
import shadows from './shadows';

const theme = createTheme({
  typography,
  breakpoints,
  shadows,
  shape,
  palette,
  components
});

export default theme;
