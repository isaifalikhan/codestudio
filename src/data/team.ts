export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Saif Ali',
    role: 'Founder & CEO',
    photo: '/images/saif.jpeg',
    linkedin: 'https://linkedin.com/in/saifali',
  },
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Development',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Thorne',
    role: 'UX Strategist',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
  },
];
