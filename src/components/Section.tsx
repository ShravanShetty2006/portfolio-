import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function Section({ id, index, label, title, children }: { id: string; index: string; label: string; title: string; children: ReactNode }) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} sx={{ py: { xs: 10, md: 16 }, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="overline" color="primary" component="p">{index} / {label}</Typography>
          <Typography variant="h2" component="h2" id={`${id}-title`} sx={{ mt: 1, mb: { xs: 5, md: 8 }, maxWidth: 900 }}>{title}</Typography>
        </Reveal>
        {children}
      </Container>
    </Box>
  );
}
