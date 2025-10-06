// src/app/components/Header.tsx
"use client";
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../utils';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        gap: 2,
        bgcolor: 'background.surface',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: { xs: 'space-between', sm: 'flex-end' },
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      }}
    >
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        fontWeight="xl"
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        Konferenz
      </Typography>
    </Box>
  );
}