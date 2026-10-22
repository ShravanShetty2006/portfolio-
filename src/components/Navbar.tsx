import { useEffect, useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { mono } from '../theme/theme';
import { site } from '../data/site';

const links = ['about', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    [...links, 'experience'].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };

  return (
    <AppBar position="fixed" elevation={0} component="header" sx={{ background: scrolled ? 'rgba(9,9,9,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(8px)' : 'none', borderBottom: 1, borderColor: scrolled ? 'divider' : 'transparent', transition: 'all .3s' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
          <Link href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }} color="text.primary" sx={{ fontFamily: mono, fontWeight: 500 }}>{site.name}<Box component="span" sx={{ color: 'primary.main' }}>_</Box></Link>
          <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {links.map((id) => (
              <Link key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }} aria-current={active === id ? 'true' : undefined}
                sx={{ textTransform: 'capitalize', fontSize: 14, color: active === id ? 'primary.main' : 'text.secondary', transition: 'color .2s', '&:hover': { color: 'text.primary' } }}>{id}</Link>
            ))}
            <Button variant="contained" size="small" onClick={() => go('contact')}>Let's Talk</Button>
          </Box>
          <IconButton aria-label="Open menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><Menu /></IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: '80%', maxWidth: 320, p: 3, background: '#090909' } }}>
        <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}><X /></IconButton>
        <Box component="nav" aria-label="Mobile" sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
          {links.map((id) => <Button key={id} onClick={() => go(id)} sx={{ justifyContent: 'flex-start', fontSize: 22, textTransform: 'capitalize', color: 'text.primary' }}>{id}</Button>)}
          <Button variant="contained" onClick={() => go('contact')} sx={{ mt: 3 }}>Let's Talk</Button>
        </Box>
        <Typography variant="overline" color="text.secondary" sx={{ mt: 'auto' }}>{site.location}</Typography>
      </Drawer>
    </AppBar>
  );
}
