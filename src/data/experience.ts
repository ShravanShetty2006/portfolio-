// EDIT ME: placeholders only. Add real roles, education, hackathons, certifications.
export interface Entry { kind: string; role: string; org: string; dates: string; points: string[] }
export const experience: Entry[] = [
  { kind: 'Experience', role: '[Role / Position]', org: '[Organization]', dates: '[Start – End]', points: ['[Responsibility or achievement]', '[Responsibility or achievement]'] },
  { kind: 'Education', role: '[Degree / Program]', org: '[Institution]', dates: '[Start – End]', points: ['[Relevant coursework or highlight]'] },
  { kind: 'Hackathon', role: '[Event / Result]', org: '[Organizer]', dates: '[Year]', points: ['[What you built]'] },
];
