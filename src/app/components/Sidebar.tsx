// src/app/components/Sidebar.tsx
"use client";
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CastleIcon from '@mui/icons-material/Castle';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { closeSidebar } from '../utils';

// (Die Toggler-Komponente bleibt unverändert)
function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: 'grid',
          transition: '0.2s ease',
          '& > *': {
            overflow: 'hidden',
          },
          ...(open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' }),
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <IconButton variant="soft" color="primary" size="sm">
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography level="title-lg">Gogistisches Reich</Typography>
      </Box>

      {/* Die Navigationsliste */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <Link href="/" style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton selected={pathname === '/'}>
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Reichsportal</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
             <Link href="/kaiser" style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton selected={pathname === '/kaiser'}>
                <CastleIcon />
                <ListItemContent>
                  <Typography level="title-sm">Unser Kaiser</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <ArticleIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Konferenzblätter</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon sx={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <Link href="/konferenzblaetter/aktuell" style={{ textDecoration: 'none', width: '100%' }}>
                    <ListItemButton selected={pathname === '/konferenzblaetter/aktuell'}>Aktuelle Ausgabe</ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/konferenzblaetter/archiv" style={{ textDecoration: 'none', width: '100%' }}>
                    <ListItemButton selected={pathname === '/konferenzblaetter/archiv'}>Archiv</ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
          
          <ListItem>
            <Link href="/konferenztermine" style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton selected={pathname === '/konferenztermine'}>
                <EventIcon />
                <ListItemContent>
                  <Typography level="title-sm">Konferenztermine</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/erlasse" style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton selected={pathname === '/erlasse'}>
                <GavelIcon />
                <ListItemContent>
                  <Typography level="title-sm">Kaiserliche Erlasse</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <GroupRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Bürger & Adel</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon sx={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                   <Link href="/adel" style={{ textDecoration: 'none', width: '100%' }}>
                    <ListItemButton selected={pathname === '/adel'}>Adelsregister</ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/buerger" style={{ textDecoration: 'none', width: '100%' }}>
                    <ListItemButton selected={pathname === '/buerger'}>Bürgerverwaltung</ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>
      </Box>

      {/* Benutzerprofil am Ende */}
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Kaiser Goltz</Typography>
          <Typography level="body-xs">imperator@gogistisches-reich.de</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral">
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}