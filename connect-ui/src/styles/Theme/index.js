import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { palette } from './palette';
import { shape } from './shape';
import { shadows } from './shadows';
import { components } from './components';

const theme = createTheme({
    typography,
    breakpoints,
    shadows,
    shape,
    palette,
    components,
});

export default theme;