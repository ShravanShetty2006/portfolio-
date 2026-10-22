import { Box, Typography } from '@mui/material';
import Section, { Reveal } from './Section';
import { site } from '../data/site';

export default function About() {
  const a = site.about;
  const rows: [string, string][] = [['What I build', a.builds], ['Technical interests', a.interests], ['Approach', a.approach], ['Currently exploring', a.learning]];
  return (
    <Section id="about" index="01" label="About" title={a.bio}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, columnGap: 8 }}>
        {rows.map(([k, v], i) => (
          <Reveal key={k} delay={i * 0.05}>
            <Box sx={{ py: 3, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="overline" color="text.secondary" component="h3">{k}</Typography>
              <Typography sx={{ mt: 1 }}>{v}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
      <Typography variant="overline" color="text.secondary" sx={{ mt: 4, display: 'block' }}>Location: {site.location}</Typography>
    </Section>
  );
}
