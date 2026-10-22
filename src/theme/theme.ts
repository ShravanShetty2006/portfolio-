import { createTheme } from '@mui/material/styles';
export const colors = { bg: '#090909', bg2: '#111111', text: '#F5F5F5', muted: '#A0A0A0', accent: '#B6FF6C', border: 'rgba(255,255,255,0.12)' };
const heading = '"Space Grotesk","Inter",sans-serif';
export const mono = '"JetBrains Mono",ui-monospace,monospace';
export default createTheme({
  palette: { mode: 'dark', background: { default: colors.bg, paper: colors.bg2 }, text: { primary: colors.text, secondary: colors.muted }, primary: { main: colors.accent, contrastText: colors.bg }, divider: colors.border },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: '"Inter",system-ui,sans-serif',
    h1: { fontFamily: heading, fontWeight: 700, fontSize: 'clamp(2.4rem,5.2vw,4.8rem)', lineHeight: 1.04, letterSpacing: '-0.035em' },
    h2: { fontFamily: heading, fontWeight: 700, fontSize: 'clamp(2rem,4.5vw,3.6rem)', lineHeight: 1.08, letterSpacing: '-0.03em' },
    h3: { fontFamily: heading, fontWeight: 500, fontSize: 'clamp(1.3rem,2vw,1.7rem)', letterSpacing: '-0.02em' },
    body1: { lineHeight: 1.7 }, body2: { lineHeight: 1.65 },
    overline: { fontFamily: mono, fontSize: '0.75rem', letterSpacing: '0.12em', lineHeight: 1.5 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { textTransform: 'none', borderRadius: 999, fontWeight: 600, padding: '10px 24px', transition: 'all .25s ease' }, outlined: { borderColor: colors.border, color: colors.text, '&:hover': { borderColor: colors.accent, color: colors.accent, background: 'transparent' } } } },
    MuiChip: { styleOverrides: { root: { fontFamily: mono, fontSize: '0.75rem', borderRadius: 999, background: 'transparent', border: `1px solid ${colors.border}` } } },
    MuiLink: { defaultProps: { underline: 'none' } },
    MuiCssBaseline: { styleOverrides: { 'a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible': { outline: `2px solid ${colors.accent}`, outlineOffset: 3 } } },
  },
});
