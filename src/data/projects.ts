// EDIT ME: example content only. Replace names, links and outcomes with real ones.
export interface Project { name: string; category: string; description: string; tech: string[]; outcome: string; github: string; demo?: string; hue: number }
export const projects: Project[] = [
  { name: 'Example Project One', category: 'Web Application', description: '[Example] A full-stack app that solves a clear problem. Replace with your own project.', tech: ['React', 'TypeScript', 'Node.js'], outcome: '[Example] Describe a real outcome you achieved.', github: 'https://github.com/your-username/project-one', demo: 'https://example.com', hue: 90 },
  { name: 'Example Project Two', category: 'AI / Machine Learning', description: '[Example] A model-driven tool with a clean interface. Replace with your own project.', tech: ['Python', 'PyTorch', 'FastAPI'], outcome: '[Example] Describe a real outcome you achieved.', github: 'https://github.com/your-username/project-two', hue: 200 },
  { name: 'Example Project Three', category: 'Creative Development', description: '[Example] An interactive 3D experience. Replace with your own project.', tech: ['Three.js', 'R3F', 'GLSL'], outcome: '[Example] Describe a real outcome you achieved.', github: 'https://github.com/your-username/project-three', demo: 'https://example.com', hue: 320 },
];
