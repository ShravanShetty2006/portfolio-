import { Box, Typography } from '@mui/material';
import Section, { Reveal } from './Section';
import { experience } from '../data/experience';
import { mono } from '../theme/theme';

export default function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" title="Experience, education & milestones.">
      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {experience.map((e, i) => (
          <Reveal key={i}>
            <Box component="li" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '220px 1fr' }, gap: { xs: 1, md: 4 }, py: 4, borderTop: 1, borderColor: 'divider' }}>
              <Box>
                <Typography variant="overline" color="primary">{e.kind}</Typography>
                <Typography sx={{ fontFamily: mono, fontSize: 13, color: 'text.secondary' }}>{e.dates}</Typography>
              </Box>
              <Box>
                <Typography variant="h3" component="h3">{e.role}</Typography>
                <Typography color="text.secondary">{e.org}</Typography>
                <Box component="ul" sx={{ mt: 2, pl: 2.5, color: 'text.secondary' }}>{e.points.map((p, j) => <li key={j}>{p}</li>)}</Box>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
