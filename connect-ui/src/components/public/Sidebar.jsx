import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
  IconButton,
  Tooltip
} from '@/MUI/MuiComponents';

import {
  CloseIcon,
  LockOpenIcon,
  LockIcon,
  HomeOutlinedIcon,
  BuildCircleOutlinedIcon,
  InfoOutlinedIcon,
  ContactMailOutlinedIcon,
} from '../../MUI/MuiIcons';
import { NavLink } from 'react-router-dom';

const sidebarList = [
  { path: '/', text: 'Home', icon: <HomeOutlinedIcon /> },
  { path: '/features', text: 'Features', icon: <BuildCircleOutlinedIcon /> },
  { path: '/about', text: 'About', icon: <InfoOutlinedIcon /> },
  { path: '/contact', text: 'Contact', icon: <ContactMailOutlinedIcon /> },
];


function Sidebar() {
  return <div>Sidebar Here.</div>;
}

export default Sidebar;
