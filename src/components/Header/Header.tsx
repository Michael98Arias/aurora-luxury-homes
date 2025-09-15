"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { useUserStore } from '@/store/useUserStore';
import { AccountCircle, Language, Logout, Person } from '@mui/icons-material';
import { AppBar, Box, Button, CircularProgress, IconButton, Toolbar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { role } = useUserStore();
  const { loading, handleLogout } = useAuth();
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    router.push('/profile');
    handleMenuClose();
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogoutWithClose = () => {
    handleLogout();
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <div className={styles["login-image"]}>
              <Image
                src="/images/Logo.png"
                alt="Slogan"
                width={120}
                height={80}
                priority
              />
            </div>
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 2 }}>
          <Link href="/all">
            <Button sx={{ color: 'black', fontWeight: 'bold' }}>{t('nav.all')}</Button>
          </Link>
          <Link href="/contact">
            <Button sx={{ color: 'black', fontWeight: 'bold' }}>{t('nav.contact')}</Button>
          </Link>
          <Link href="/about">
            <Button sx={{ color: 'black', fontWeight: 'bold' }}>{t('nav.about')}</Button>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {role === 'user' ? (
            <Button
              variant="outlined"
              onClick={handleMenuClick}
              sx={{ color: 'grey', borderColor: '#808080', borderRadius: '10px', padding: '5px 10px' }}
            >
              <Logout sx={{ mr: 1 }} />
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="outlined" sx={{ color: 'grey', borderColor: '#808080', borderRadius: '10px', padding: '5px 10px' }} disabled={loading}>
                {loading ? <CircularProgress size={24} sx={{ color: 'black' }} /> : <AccountCircle />}
              </Button>
            </Link>
          )}
          <IconButton onClick={() => handleChangeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
            <Language />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleProfile}>
              <Person sx={{ mr: 1 }} /> {t('nav.profile')}
            </MenuItem>
            <MenuItem onClick={handleLogoutWithClose}>
              {loading ? <CircularProgress size={24} sx={{ color: 'black' }} /> : <Logout sx={{ mr: 1 }} />}
              {t('nav.logout')}
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
