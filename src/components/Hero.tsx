import { Suspense, lazy } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '../data/site';
import { useWebGL } from '../hooks/useWebGL';
import { mono } from '../theme/theme';

const Scene3D = lazy(() => import('./Scene3D'));

const Fallback = () => (
  <Box aria-hidden sx={{ width: '60%', aspectRatio: '1', borderRadius: '50%', m: 'auto', background: 'radial-gradient(circle at 35% 30%, #e6e6e6, #3a3a3a 55%, #0b0b0b)', border: '1px solid rgba(182,255,108,.35)' }} />
);

export default function Hero() {
  const webgl = useWebGL();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <Box component="section" id="top" aria-label="Introduction" sx={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', pt: 10, pb: 8 }}>
      <Container maxWidth="lg" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography variant="overline" component="p" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, border: 1, borderColor: 'divider', borderRadius: 999, px: 1.5, py: 0.5, color: 'text.secondary' }}>
            <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />{site.available}
          </Typography>
          <Typography variant="h1" sx={{ mt: 3 }}>Building Digital Experiences at the Intersection of <Box component="span" sx={{ color: 'primary.main' }}>Code</Box> &amp; Creativity.</Typography>
          <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 520 }}>{site.intro}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4, alignItems: 'center' }}>
            <Button variant="contained" size="large" onClick={() => go('projects')}>Explore My Work</Button>
            <Button variant="outlined" size="large" onClick={() => go('contact')}>Let's Connect</Button>
            <IconButton aria-label="GitHub profile" component="a" href={site.socials.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></IconButton>
            <IconButton aria-label="LinkedIn profile" component="a" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></IconButton>
          </Box>
        </Box>
        <Box sx={{ order: { xs: 1, md: 2 }, height: { xs: 280, sm: 380, md: 520 }, width: '100%' }}>
          {webgl ? <Suspense fallback={<Fallback />}><Scene3D /></Suspense> : <Fallback />}
        </Box>
      </Container>
      <Box component={motion.div} animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }} aria-hidden
        sx={{ position: 'absolute', bottom: 24, left: '50%', ml: '-30px', width: 60, textAlign: 'center', color: 'text.secondary', fontFamily: mono, fontSize: 11 }}>
        SCROLL<br /><ArrowDown size={14} />
      </Box>
    </Box>
  );
}
