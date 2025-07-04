import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/Theme/index';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
