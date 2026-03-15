'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiCoverLetterWidget() {
  return <AiToolShared tool="cover-letter" label="Job description and your details (experience, skills)" placeholder="Paste job description, then add your name, experience, and key skills" buttonLabel="Generate cover letter" />;
}
