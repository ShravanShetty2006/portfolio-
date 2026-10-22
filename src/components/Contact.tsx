import { FormEvent, useState } from 'react';
import { Alert, Box, Button, IconButton, TextField } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from './Section';
import { site } from '../data/site';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
type Status = 'idle' | 'loading' | 'success' | 'error';

function Form() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!d.name?.trim()) errs.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? '')) errs.email = 'Please enter a valid email.';
    if (!d.message?.trim() || d.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    try {
      const res = await fetch(endpoint!, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) });
      if (!res.ok) throw new Error();
      setStatus('success'); form.reset();
    } catch { setStatus('error'); }
  };
  return (
    <Box component="form" onSubmit={submit} noValidate sx={{ display: 'grid', gap: 2, mt: 6, maxWidth: 560 }}>
      <TextField name="name" label="Name" error={!!errors.name} helperText={errors.name} />
      <TextField name="email" label="Email" type="email" error={!!errors.email} helperText={errors.email} />
      <TextField name="message" label="Message" multiline minRows={4} error={!!errors.message} helperText={errors.message} />
      <Button type="submit" variant="contained" size="large" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send message'}</Button>
      {status === 'success' && <Alert severity="success">Thanks! Your message was sent.</Alert>}
      {status === 'error' && <Alert severity="error">Something went wrong. Please email me directly.</Alert>}
    </Box>
  );
}

export default function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" title="Have an Interesting Idea? Let's Build Something Meaningful.">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        <Button variant="contained" size="large" href={`mailto:${site.email}`} startIcon={<Mail size={18} />}>{site.email}</Button>
        <IconButton aria-label="GitHub profile" component="a" href={site.socials.github} target="_blank" rel="noopener noreferrer"><Github size={22} /></IconButton>
        <IconButton aria-label="LinkedIn profile" component="a" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={22} /></IconButton>
      </Box>
      {/* The form only renders when a real endpoint is configured (see .env.example) */}
      {endpoint ? <Form /> : null}
    </Section>
  );
}
