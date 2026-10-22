import { Box, Chip, Typography } from '@mui/material';
import Section, { Reveal } from './Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" index="03" label="Skills" title="Tools I use to turn ideas into products.">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3,1fr)' }, gap: { xs: 4, md: 6 } }}>
        {Object.entries(skills).map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.04}>
            <Box component="section" aria-label={cat} sx={{ borderTop: 1, borderColor: 'divider', pt: 2 }}>
              <Typography variant="overline" color="text.secondary" component="h3">{cat}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {items.map((s) => <Chip key={s} label={s} sx={{ transition: 'all .2s', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }} />)}
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
