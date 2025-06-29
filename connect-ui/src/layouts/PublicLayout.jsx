import { Outlet } from 'react-router-dom';
import { Box, Stack, useMediaQuery, useTheme } from '@/MUI/MuiComponents';
import Navbar from '@/components/public/Navbar';
import video from '@/assets/videos/bgVideo.mp4';
import Sidebar from '@/components/public/Sidebar';
import Footer from '@/components/public/Footer';

const Layout = () => {

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      position: 'relative',
      zIndex: 1,
    }}>

      {/* === Background Video === */}
      <Stack
        component={'video'}
        src={video}
        alt='background snowFall video'
        aria-label='background snowFall video'
        autoPlay
        muted
        loop
        playsInline
        type='video/mp4'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.14)',
          zIndex: -2,
        }}
      />

      {/* === Optional Dark Overlay === */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          zIndex: -1,
        }}
      />

      {/* === Navbar Section === */}
      <Navbar />
      <Box sx={{
        px: isSm ? 2 : 15,
        py: 5,
        display: 'flex',
        gap: 2
      }}>
        {/* === Sidebar === */}
        <Sidebar />
        {/* === Main Content === */}
        <Outlet />
      </Box>

      {/* === Footer === */}
      <Footer />
    </Box>
  );
};

export default Layout;
