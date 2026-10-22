import { Box, Chip, Link, Typography } from '@mui/material';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { colors, mono } from '../theme/theme';

const linkSx = { display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: 14, color: 'text.primary', '& svg': { transition: 'transform .25s' }, '&:hover': { color: 'primary.main' }, '&:hover svg.arrow': { transform: 'translate(3px,-3px)' } };

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Box component="article" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: index % 2 ? '1fr 1.1fr' : '1.1fr 1fr' }, gap: { xs: 3, md: 6 }, py: { xs: 4, md: 6 }, borderTop: 1, borderColor: 'divider', '&:hover .visual': { transform: 'scale(1.04)' } }}>
      <Box sx={{ order: { md: index % 2 ? 2 : 1 }, overflow: 'hidden', borderRadius: 1, border: 1, borderColor: 'divider', aspectRatio: '16/10', bgcolor: colors.bg2, position: 'relative' }}>
        {/* Generated visual placeholder: swap for a real screenshot in an <img> with alt text */}
        <Box className="visual" role="img" aria-label={`Abstract visual for ${p.name}`} sx={{ position: 'absolute', inset: 0, transition: 'transform .6s cubic-bezier(.22,1,.36,1)', background: `radial-gradient(circle at 30% 30%, hsl(${p.hue} 70% 55% / .35), transparent 55%), repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 48px)` }} />
        <Typography variant="overline" sx={{ position: 'absolute', left: 16, bottom: 12, color: 'text.secondary' }}>Example content</Typography>
      </Box>
      <Box sx={{ order: { md: index % 2 ? 1 : 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="overline" color="primary">{p.category}</Typography>
        <Typography variant="h3" component="h3" sx={{ mt: 1 }}>{p.name}</Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>{p.description}</Typography>
        <Typography variant="body2" sx={{ mt: 2, fontFamily: mono, fontSize: 13 }}>→ {p.outcome}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>{p.tech.map((t) => <Chip key={t} label={t} size="small" />)}</Box>
        <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
          <Link href={p.github} target="_blank" rel="noopener noreferrer" sx={linkSx} aria-label={`${p.name} source code on GitHub`}><Github size={16} />Code</Link>
          {p.demo && <Link href={p.demo} target="_blank" rel="noopener noreferrer" sx={linkSx} aria-label={`${p.name} live demo`}>Live demo<ArrowUpRight className="arrow" size={16} /></Link>}
        </Box>
      </Box>
    </Box>
  );
}
