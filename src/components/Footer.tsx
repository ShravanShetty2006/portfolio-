import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { site } from '../data/site';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 5 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{site.name}</Typography>
          <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} · Designed &amp; built with care.</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" color="text.secondary"><Github size={18} /></Link>
          <Link href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" color="text.secondary" sx={{ ml: 1 }}><Linkedin size={18} /></Link>
          <IconButton aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ ml: 1, border: 1, borderColor: 'divider' }}><ArrowUp size={16} /></IconButton>
        </Box>
      </Container>
    </Box>
  );
}
